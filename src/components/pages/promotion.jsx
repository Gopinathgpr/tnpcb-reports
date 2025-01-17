import React from "react";
import AntdTable from "../antdTable/table";
import { Space, Table, Tag } from "antd";
import { Button, Grid, Stack } from "@mui/material";
import PromotionModal from "../pageComponents/promotionModal"
const Products = () => {
  const columns = [
    {
      title: "Template Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Definition",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Promotion Name",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Promotion Definition",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <>
      <Stack spacing={2}>
        <Grid  container spacing={2}>
          <Grid xs={10}></Grid>
          <Grid xs={2}>
          <PromotionModal  />
          </Grid>
        </Grid>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </Stack>
    </>
  );
};
export default Products;
