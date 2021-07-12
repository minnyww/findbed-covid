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
      if (!text) return null;
      return (
        <div>
          {text.split(",").map((phone) => {
            return (
              <a key={phone} href={`tel:${phone}`}>
                {phone},
              </a>
            );
          })}
        </div>
      );
    },
  },
  {
    title: "ลิ้ง",
    dataIndex: "link",
    key: "key",
    // eslint-disable-next-line react/display-name
    render: (text) => {
      return <a href={`${text}`}>{text}</a>;
    },
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Row style={{ padding: "1rem" }}>
        <Typography.Title level={2}>
          ข้อมูลสำหรับช่วยเหลือผู้ป่วย
        </Typography.Title>
      </Row>
      <Table
        columns={columns}
        dataSource={lists}
        size="small"
        pagination={{ pageSize: 50 }}
        rowKey={(row) => {
          return row.key;
        }}
      />
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
      key: 1,
    },
    {
      name: "สายด่วน สปสช",
      link: "",
      phonenumber: "1330",
      other: "",
      key: 2,
    },

    {
      name: "ศูนย์เอราวัณ",
      link: "",
      phonenumber: "1646,02-220-7570",
      other: "",
      key: 3,
    },
    {
      name: "โรงพยาบาล บุศราคัม เมืองทองธานี",
      link: "",
      phonenumber: "02-029-1661",
      other: "",
      key: 4,
    },
    {
      name: "ศูนย์พักคอย อยู่ที่ซอยอ่อนนุช 35",
      link: "",
      phonenumber: "084-932-1491",
      other: "",
      key: 5,
    },
    {
      name: "กรมการแพทย์",
      link: "",
      phonenumber: "1668",
      other: "",
      key: 6,
    },
    {
      name: "เพจเส้นด้าย-Zendai",
      link: "https://www.facebook.com/zendai.org",
      phonenumber: "081-591-9714, 080-660-9998, 097-119-68,02-096-5000",
      other: "",
      key: 7,
    },
    {
      name: "เพจสรยุทธ กรรมกรข่าว",
      link: "https://www.facebook.com/sorrayuth9115",
      phonenumber: "",
      other: "",
      key: 8,
    },
    {
      name: "Taxi COVID-19",
      link: "",
      phonenumber: "096-771-1687",
      other: "",
      key: 9,
    },
    {
      name: "ไทยรัฐนิวส์โชว์",
      link: "https://www.facebook.com/newsshow32/",
      phonenumber: "",
      other: "",
      key: 10,
    },
    {
      name: "พรรคกล้า",
      link: "https://www.facebook.com/klaparty",
      phonenumber: "",
      other: "",
      key: 11,
    },
    {
      name: "ทีมอนุดิษฐ์-AnudithTeam",
      link: "https://www.facebook.com/AnudithTeam",
      phonenumber: "",
      other: "",
      key: 12,
    },
    {
      name: "ปอเปี๊ยะ กาลเวลา",
      link: "https://www.facebook.com/porpeerfanpage",
      phonenumber: "",
      other: "",
      key: 13,
    },
    {
      name: "ศูนย์ประสานฉุกเฉินไทยพีบีเอสช่วยโควิด-19 รับเรื่องร้องเรียนเกี่ยวกับโควิด-19",
      link: "https://www.facebook.com/RongtookThaiPBS/",
      phonenumber: "",
      other: "line : @RongTookThaiPBS",
      key: 14,
    },
    {
      name: "walk together",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScsJdXFAf9wBEn59e0cndZeT2-pFaL71ee5DS2t_AF6dVOI4A/viewform",
      phonenumber: "",
      other: "",
      key: 15,
    },
    {
      name: "ลงทะเบียนจัดสรรเตียง 1668",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd5jJKnT-Vw4IZ4aiFqNKiANxuIRhzq7ngm5EBdvURCYRfR3g/viewform",
      phonenumber: "",
      other: "-",
      key: 16,
    },
    {
      name: "ใครติดสะกิดมาร์ท",
      link: "https://www.facebook.com/Apiwat.dansrichanchai",
      phonenumber: "064-939-4691",
      other: "-",
      key: 17,
    },
    {
      name: "โควิดล้อถึงเตียง",
      link: "https://www.facebook.com/CC.Kontumngan",
      phonenumber: "",
      other: "-",
      key: 18,
    },
    {
      name: "พรรคประชาธิปัตย์",
      link: "",
      phonenumber: "",
      other: "line : @peakpanasin",
      key: 19,
    },
    {
      name: "สบายดีบอต",
      link: "https://page.line.me/sabaideebot?openQrModal=true",
      phonenumber: "",
      other: "line : @sabaideebot",
      key: 20,
    },
    {
      name: "เราต้องรอด",
      link: "https://www.facebook.com/savethailandsafe",
      phonenumber: "",
      other: "line : @iwillsurvive",
      key: 21,
    },
    {
      name: "ลงทะเบียนเพื่อช่วยหาเตียง COVID-19 sabaideebot",
      link: "https://self-screening-covid-19-sxinbg.web.app/dispatch-case",
      phonenumber: "",
      key: 22,
    },
    {
      name: "ฟอร์มลงทะเบียนหาเตียง กทม",
      link: "https://bkkcovid19connect.airesearch.in.th/",
      phonenumber: "",
      key: 23,
    },
    {
      name: "ทีมดร.ปวิน",
      link: "",
      phonenumber: "0917899393",
      key: 24,
    },
  ];
  return {
    props: {
      lists,
    },
  };
}
