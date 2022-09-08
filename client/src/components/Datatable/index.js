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
          "https://script.google.com/macros/s/AKfycbyvOpqKs_5aVqOcN7fbP78iKoVlCLonatEaouLtHtCl1oFvYNPfy8lt9yIxUOIvNAmMVg/exec"
        );
        setGridData(response.data.data);
        setLoading(false);
    }

    
    const modifiedData = gridData.map(({...item}) => ({
      ...item,
      key: item.S_No,
   
    }));

    const columns = [
      {
        title: "S_No",
        dataIndex:"S_No",
        width: '2%',
        ...getColumnSearchProps('S_No'),

       },
       {
        title: "Tools Description",
        dataIndex:"Tools Description",
        width: '10%',
        ...getColumnSearchProps('Tools Description'),

       },  
        {
        title: "Equipment",
        dataIndex:"Equipment",
        width: '10%',
        ...getColumnSearchProps('Equipment'),

       }, 
    
       {
        title: "Type",
        dataIndex:"Type",
        align: "center",
        width: '10%',
        ...getColumnSearchProps('Type'),
        editable: true
    },
    {
        title: "Make",
        dataIndex:"Make",
        align: "center",
        width: '10%',
        ...getColumnSearchProps('Make'),
        editable: true
    },
    {
      title: "Material No",
      dataIndex:"Material No",
      align: "center",
      width: '10%',
      ...getColumnSearchProps('Material No'),
      editable: true
  },
    {
        title: "Quantity",
        dataIndex:"Quantity",
        align: "center",
        width: '10%',
        ...getColumnSearchProps('Quantity'),
        editable: true
    },
    {
      title: "Location",
      dataIndex:"Location",
      align: "center",
      width: '10%',
      ...getColumnSearchProps('Location'),
      editable: true
     },
     {
      title: "Message",
      dataIndex:"Message",
      align: "center",
      width: '10%',
      ...getColumnSearchProps('Message'),
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









// import React,{useState,useEffect,useRef} from "react";
// import { SearchOutlined } from '@ant-design/icons';
// import { Button, Input, Space, Table } from 'antd';
// import Highlighter from 'react-highlight-words';
// import axios from 'axios'
// import 'antd/dist/antd.min.css';


// const DataTable = () => {
//     const [gridData,setGridData] = useState([]);
//     const [loading,setLoading] = useState([]);


//     const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef(null);

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText('');
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div
//         style={{
//           padding: 8,
//         }}
//       >
//         <Input
//           ref={searchInput}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{
//             marginBottom: 8,
//             display: 'block',
//           }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{
//               width: 100,
//             }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => clearFilters && handleReset(clearFilters)}
//             size="small"
//             style={{
//               width: 90,
//             }}
//           >
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({
//                 closeDropdown: false,
//               });
//               setSearchText(selectedKeys[0]);
//               setSearchedColumn(dataIndex);
//             }}
//           >
//             Filter
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => (
//       <SearchOutlined
//         style={{
//           color: filtered ? '#1890ff' : undefined,
//         }}
//       />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownVisibleChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: (text) =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{
//             backgroundColor: '#ffc069',
//             padding: 0,
//           }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ''}
//         />
//       ) : (
//         text
//       ),
//   });





//     useEffect(() => {
//      loadData();
//      // eslint-disable-next-line
//     }, [])
    
//  const loadData = async ()=>{
//         setLoading(true);
//         const response = await axios.get(
//           "https://script.google.com/macros/s/AKfycbz93X_8fysJZkv5vDzr580nl0uaSk9SMfEpfk5ci1MmGGJWHOtTC3YcAE0KwxViewS13g/exec"
//         );
//         setGridData(response.data.data);
//         setLoading(false);
//     }

    
//     const modifiedData = gridData.map(({...item}) => ({
//       ...item,
//       key: item.S.No,
   
//     }));

//     const columns = [
//         {
//         title: "S.No",
//         dataIndex:"S.No",
//         // width: '30%',
//         ...getColumnSearchProps('S.No'),

//        }, 
//     {
//         title: "Tools Description",
//         dataIndex:"Tools Description",
//         align: "center",
//         // width: '30%',
//         ...getColumnSearchProps('Tools Description'),
//         editable: true
//     },
//     {
//       title: "Equipment",
//       dataIndex:"Equipment",
//       // width: '30%',
//       ...getColumnSearchProps('Equipment'),

//      }, 
//      {
//       title: "Type",
//       dataIndex:"Type",
//       // width: '30%',
//       ...getColumnSearchProps('Type'),

//      }, 
//      {
//       title: "Make",
//       dataIndex:"Make",
//       // width: '30%',
//       ...getColumnSearchProps('Make'),

//      }, 
//      {
//       title: "Material No",
//       dataIndex:"Material No",
//       // width: '30%',
//       ...getColumnSearchProps('Material No'),

//      }, 
//      {
//       title: "Quantity",
//       dataIndex:"Quantity",
//       // width: '30%',
//       ...getColumnSearchProps('Quantity'),

//      }, 
//      {
//       title: "Location",
//       dataIndex:"Location",
//       // width: '30%',
//       ...getColumnSearchProps('Location'),

//      }, 
//      {
//       title: "Message",
//       dataIndex:"Message",
//       // width: '30%',
//       ...getColumnSearchProps('Message'),

//      }, 
//      {
//       title: "Action",
//       dataIndex:"Action",
//       // width: '30%',
//       ...getColumnSearchProps('Action'),

//      }, 
    
   
//    ]


//   return (
//     <div>
//       <Table
//         columns={columns}
//         dataSource={modifiedData}
//         bordered
//         loading={loading}
//       />
      
//     </div>
//   )
// }

// export default DataTable