
import ModAppBar from "../../atomic/molecules/Appbard";
import { useEffect, useState } from "react";
import { ModCard } from "../../atomic/atoms/Card";
import styles from "./testviews.module.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';
export function TestViews(): JSX.Element {

  const [input, setinput] = useState("")

  const [data, setData] = useState([]);
  
      useEffect(() => {
        fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(json => setData(json))
      
      }, []);
  return (
    <>
      <ModAppBar></ModAppBar>
      <div className={styles["color-border"]}>
        <div className={styles["layout_order"]}>
          <ModCard TypeCard={"Graph"}>
            <div className={styles["ms_order"]}>
              <ModCard TypeCard={"MS"}>{"ff"}</ModCard>
              
            </div>
          </ModCard>
          <ModCard TypeCard={"Graph"}>
            <div className={styles["ms_order"]}>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
            </div>
          </ModCard>
          <ModCard TypeCard={"Graph"}>
            <div className={styles["ms_order"]}>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
            </div>
          </ModCard>
          <ModCard TypeCard={"Graph"}>
            <div className={styles["ms_order"]}>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              <ModCard TypeCard={"MS"}>{"HELLO"}</ModCard>
              
            </div>
          </ModCard>
        </div>
        <div style={{ marginLeft: '5px' }}>
          <ModCard TypeCard={"MS_Container"}>
            <div className={styles["ms_order"]}>
              {data.map((text,i) => {
                return (
                  <ModCard TypeCard={"MS"}>{text['name']}{text['state'] ? <VerifiedUserIcon/>:<GppBadIcon/>}</ModCard>
                )
              })}
            </div>
          </ModCard>
        </div>

      </div>


    </>
  );
}