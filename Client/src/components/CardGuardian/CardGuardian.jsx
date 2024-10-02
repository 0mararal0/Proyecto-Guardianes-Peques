import axios from "axios";
import React, { useEffect, useState } from "react";

export const CardGuardian = (id) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/guardian/${id.id}`)
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(id.id);

  return <div>CardGuardian</div>;
};
