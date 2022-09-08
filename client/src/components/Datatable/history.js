import React,{useState,useEffect,useRef} from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios'
import 'antd/dist/antd.min.css';


const HisTable = () => {
    const [gridData,setGridData] = useState([]);
    const [loading,setLoading] = useState([]);


    const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 100,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });





    useEffect(() => {
     loadData();
     // eslint-disable-next-line
    }, [])
    
 const loadData = async ()=>{
        setLoading(true);
        const response = await axios.get(
          "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-levqp/endpoint/api"
        );
        setGridData(response.data);
        setLoading(false);
    }

    
    const modifiedData = gridData.map(({...item}) => ({
      ...item,
      key: item.username,
   
    }));

    const columns = [
        {
        title: "username",
        dataIndex:"username",
        width: '10%',
        ...getColumnSearchProps('username'),

       }, 
    
       {
        title: "Equipment Name",
        dataIndex:"equipment",
        align: "center",
        width: '10%',
        ...getColumnSearchProps('equipment'),
        editable: true
    },
    {
        title: "Remark",
        dataIndex:"remark",
        align: "center",
        width: '10%',
        ...getColumnSearchProps('remark'),
        editable: true
    },
    {
        title: "Date",
        dataIndex:"date",
        align: "center",
        width: '10%',
        ...getColumnSearchProps('date'),
        editable: true
    },
    
    
   
   ]


  return (
    <div>
      <Table
        columns={columns}
        dataSource={modifiedData}
        bordered
        loading={loading}
      />
      
    </div>
  )
}

export default HisTable