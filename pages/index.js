import { Row, Typography, Table } from "antd";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const columns = [
  {
    title: "ชื่อ",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "เบอร์",
    dataIndex: "phonenumber",
    key: "phonenumber",
    // eslint-disable-next-line react/display-name
    render: (text) => {
      return <a href={`tel:${text}`}>{text}</a>;
    },
  },
  {
    title: "ลิ้ง",
    dataIndex: "link",
    key: "link",
  },
  {
    title: "อื่นๆ",
    dataIndex: "other",
    key: "other",
  },
];

export default function Home({ lists }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>หาเตียง</title>
        <meta name="description" content="หาเตียง ช่วยเหลือผู้ป่วย covid 19" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Row style={{ padding: "1rem" }}>
        <Typography.Title level={2}>
          ข้อมูลสำหรับช่วยเหลือผู้ป่วย
        </Typography.Title>
      </Row>
      <Table columns={columns} dataSource={lists} size="small" />
    </div>
  );
}

export async function getStaticProps() {
  const lists = [
    {
      name: "สายด่วนกรมการแพทย์ ช่วยผู้ป่วยโควิด-19",
      link: "",
      phonenumber: "1669",
      other: "",
    },
    {
      name: "สายด่วน สปสช",
      link: "",
      phonenumber: "1330",
      other: "",
    },
    {
      name: "ศูนย์เอราวัณ",
      link: "",
      phonenumber: "1646,02-220-7570",
      other: "",
    },
    {
      name: "โรงพยาบาล บุศราคัม เมืองทองธานี",
      link: "",
      phonenumber: "02-029-1661",
      other: "",
    },
    {
      name: "ศูนย์พักคอย อยู่ที่ซอยอ่อนนุช 35",
      link: "",
      phonenumber: "084-932-1491",
      other: "",
    },
    {
      name: "กรมการแพทย์",
      link: "",
      phonenumber: "1668",
      other: "",
    },
    {
      name: "เพจเส้นด้าย-Zendai",
      link: "zendai.org",
      phonenumber: "081-591-9714, 080-660-9998, 097-119-68,02-096-5000",
      other: "",
    },
    {
      name: "เพจสรยุทธ กรรมกรข่าว",
      link: "สรยุทธ สุทัศนะจินดา กรรมกรข่าว",
      phonenumber: "",
      other: "",
    },
    {
      name: "Taxi COVID-19",
      link: "",
      phonenumber: "096-771-1687",
      other: "",
    },
    {
      name: "ไทยรัฐนิวส์โชว์",
      link: "newsshow32",
      phonenumber: "",
      other: "",
    },
    {
      name: "พรรคกล้า",
      link: "klaparty",
      phonenumber: "",
      other: "",
    },
    {
      name: "ทีมอนุดิษฐ์-AnudithTeam",
      link: "AnudithTeam",
      phonenumber: "",
      other: "",
    },
    {
      name: "ปอเปี๊ยะ กาลเวลา",
      link: "porpeerfanpage , porpeer",
      phonenumber: "",
      other: "",
    },
  ];
  return {
    props: {
      lists,
    },
  };
}
