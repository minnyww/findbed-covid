/* eslint-disable react/display-name */
import { Input, Row, Table, Tag, Typography, Checkbox } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const CheckboxGroup = Checkbox.Group;

const filterOption = ["rt", "at", "ftf"];

const columns = [
  {
    title: "ชื่อ",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ประเภทการตรวจ",
    dataIndex: "type",
    key: "type",
    render: (item) => {
      const getText = (text) => {
        switch (text) {
          case "AT":
            return "Antigen test";
          case "RT":
            return "RT PCR";
          case "FTF":
            return "Fit to fly";
          default:
            return "";
        }
      };
      const getColor = (type) => {
        switch (type) {
          case "AT":
            return "salmon";
          case "RT":
            return "geekblue";
          case "FTF":
            return "magenta";
          default:
            return "";
        }
      };
      return (
        <div>
          {item.split("/")?.map((type) => (
            <Tag key={type} color={getColor(type)}>
              {getText(type)}
            </Tag>
          ))}
        </div>
      );
    },
  },
  {
    title: "ที่อยู่",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "ติดต่อ",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "หมายเหตุ",
    dataIndex: "other",
    key: "other",
  },
  {
    title: "แผนที่",
    dataIndex: "googleMap",
    key: "googleMap",
    render: (item) => {
      return (
        <Tag color="blue" onClick={() => (document.location.href = item)}>
          google map
        </Tag>
      );
    },
  },
];

const CovidTest = ({ lists }) => {
  const [allLists, setAllLists] = useState(lists);
  const [search, setSearch] = useState("");
  const [checkList, setCheckList] = useState([]);

  const format = checkList.map((item) => {
    return {
      rt: item === "rt",
      at: item === "at",
      ftf: item === "ftf",
    };
  })[0];

  useEffect(() => {
    // if (!search || checkList?.length <= 0) return setAllLists(lists);
    if (!search) {
      setAllLists(lists);
    } else {
      setAllLists((prev) => prev.filter((item) => item.name.includes(search)));
    }
  }, [lists, search]);

  useEffect(() => {
    if (checkList?.length <= 0) {
      setAllLists(lists);
    } else {
      setAllLists(() => {
        const result = lists?.filter((item) => {
          return (
            item.rt === format.rt &&
            item.at === format.at &&
            item.ftf === format.ftf
          );
        });
        return result;
      });
    }
  }, [checkList, format?.at, format?.ftf, format?.rt, lists]);
  return (
    <div className={styles.container}>
      <Head>
        <title>หาเตียง</title>
        <meta name="description" content="หาที่ตรวจโควิด" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="หาที่ตรวจโควิด" />
        <meta property="og:url" content="https://findbed-covid.vercel.app/" />
        <meta property="og:description" content="หาที่ตรวจโควิด"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row style={{ padding: "1rem" }}>
        <Typography.Title level={2} style={{ marginBottom: "0rem" }}>
          ที่ตรวจโควิด
        </Typography.Title>
      </Row>
      <Row style={{ padding: "1rem" }}>
        <Input
          placeholder="ค้นหา"
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <CheckboxGroup
          options={filterOption}
          value={checkList}
          onChange={(value) => setCheckList(value)}
        />
      </Row>
      <Row>
        <Table
          columns={columns}
          dataSource={allLists}
          rowKey={(item) => item?.name}
        />
      </Row>
      <Row style={{ padding: "1rem" }} align="middle" justify="center">
        <Typography.Text>
          data from :{" "}
          <Tag
            color="magenta"
            onClick={() =>
              (document.location.href = "https://covid-lab-data.pages.dev/")
            }
          >
            Covid lab data
          </Tag>
        </Typography.Text>
      </Row>
    </div>
  );
};
export default CovidTest;

export async function getStaticProps() {
  const response = await fetch("https://covid-lab-data.pages.dev/latest.json");
  const lists = await response?.json();
  return {
    props: {
      lists: lists?.items?.map((item) => {
        // const url = "https://www.google.co.th/maps/dir/";
        // const googleMapUrl = `url${item?.n?.spilt(" ").join("%20")}`;
        return {
          name: item?.n,
          other: `${item?.rm}`,
          address: item?.adr,
          type: item?.lt,
          contact: `โทร ${item?.mob}`,
          rt: item?.rt,
          at: item?.at,
          ftf: item?.ftf,
          googleMap: `https://www.google.co.th/maps/dir/${item?.n
            ?.split(" ")
            .join("%20")}`,
        };
      }),
    },
  };
}
