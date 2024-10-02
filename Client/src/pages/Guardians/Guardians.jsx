import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { CardGuardian } from "../../components/CardGuardian/CardGuardian";

export const Guardians = () => {
  const [dataGuardian, setDataGuardian] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/guardian")
      .then((res) => {
        setDataGuardian(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(dataGuardian);

  return (
    <>
      <div>
        {dataGuardian?.map((elem) => {
          return <CardGuardian key={elem.id} id={elem.id} />;
        })}
      </div>
    </>
  );
};
