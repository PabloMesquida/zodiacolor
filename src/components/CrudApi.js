import React, { useState, useEffect } from "react";
import { useSpring, config } from "react-spring";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Message from "./Message";
import { SectionContainer, InfoContainer, Credits } from "./CrudApi.styles.js";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);

  let api = helpHttp();
  let url = "https://zodiacolor-server.onrender.com/users";

  const props = useSpring({
    y: change ? -500 : 0,
    config: config.default,
  });

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
        setChange(true);
      } else {
        setError(res);
      }
    });
  };

  return (
    <SectionContainer>
      <InfoContainer style={props}>
        <CrudForm createData={createData} />
        {loading && <div>Loading.</div>}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable data={db} />}
      </InfoContainer>
      {/* <Credits>
        <a
          href="https://pixelfaces.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          ✨ Pixel Faces
        </a>
      </Credits> */}
    </SectionContainer>
  );
};

export default CrudApi;
