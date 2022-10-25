import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { SectionContainer } from "./CrudApi.styles.js";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dbSigns, setDbSigns] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "https://zodiacolor-server.onrender.com/users";
  let urlSigns = "https://zodiacolor-server.onrender.com/signs";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
      });

    helpHttp()
      .get(urlSigns)
      .then((res) => {
        if (!res.err) {
          setDbSigns(res);
          setError(null);
        } else {
          setDbSigns(null);
          setError(res);
        }
      });
    console.log(dbSigns);
    setLoading(false);
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  return (
    <SectionContainer>
      <CrudForm createData={createData} signs={dbSigns} />
      {loading && <div>Loading.</div>}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && <CrudTable data={db} />}
    </SectionContainer>
  );
};

export default CrudApi;
