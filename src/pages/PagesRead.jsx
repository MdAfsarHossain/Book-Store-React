import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from "recharts";

import { Helmet } from "react-helmet-async";
import { getBooks } from "../utilities/localStorage";

const PagesRead = () => {
  const allBooks = useLoaderData();
  const readBooksId = getBooks("readBooks");
  const [readBooks, setReadBooks] = useState([]);

  useState(() => {
    const readBooksFilter = allBooks?.filter((book) =>
      readBooksId.includes(book.bookId)
    );
    setReadBooks(readBooksFilter);
  }, []);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  const readBooksData = [];
  readBooks?.forEach((book) => {
    readBooksData.push({ name: book.book_name, pages: book.totalPages });
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex flex-row justify-center items-center mt-10">

      <Helmet>
        <title>Book Store | Pages Read</title>
      </Helmet>
      {/* <h1>Total Books: {allBooks.length}</h1>
      <h1>Pages To Read: {readBooksId.length}</h1>
      <h1>Pages To Read: {readBooks.length}</h1> */}
      {/* {console.log(readBooksData)} */}

      <BarChart
        width={950}
        height={300}
        data={readBooksData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesRead;
