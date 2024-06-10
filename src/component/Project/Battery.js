import React, { useEffect, useState } from "react";
import "./Project.scss";

import { useIntl } from "react-intl";
import { convertUnit, showUnit, showUnitk } from "../../App";
import { useSelector } from "react-redux";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { isBrowser } from "react-device-detect";

export default function Battery(props) {
  const dataLang = useIntl();
  const [state, setState] = useState(false);
  const month = useSelector((state) => state.tool.month);
  const year = useSelector((state) => state.tool.year);
  const total = useSelector((state) => state.tool.total);

  useEffect(() => {
    if (parseFloat(props.cal?.bat_1) > 0) {
      setState(true);
    } else {
      setState(false);
    }
  }, [props.cal.bat_1]);

  return (
    <>
      {isBrowser
        ?
        <div className="DAT_ProjectData_Dashboard_Data_Center_Battery">
          <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Data">
            <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Data_Img">
              <img
                src="/dat_icon/full-battery.png"
                alt=""
                style={{ width: "50px", height: "90px" }}
              />
            </div>

            <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Data_Status">
              <div>
                <span>SoC:</span>
                &nbsp;
                <span style={{ fontSize: "26px" }}>
                  {Number(
                    parseFloat(props.cal?.bat_2 || 0).toFixed(2)
                  ).toLocaleString("en-US")}
                </span>
                &nbsp;
                <span style={{ fontSize: "18px", color: "grey" }}>%</span>
              </div>
              {state ? (
                <FaArrowLeftLong color="green" size={30} />
              ) : (
                <FaArrowRightLong color="red" size={25} />
              )}
              <span style={{ fontSize: "16px" }}>
                {state
                  ? dataLang.formatMessage({ id: "charge" })
                  : dataLang.formatMessage({ id: "discharge" })}
              </span>
            </div>

            <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Data_Data">
              <div style={{ marginBottom: "8px", color: "grey" }}>
                {dataLang.formatMessage({ id: "batPower" })}
              </div>
              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "32px",
                    color: props.cal?.bat_1 < 0 ? "red" : "black",
                  }}
                >
                  {Number(
                    parseFloat(
                      convertUnit(Math.abs(props.cal?.bat_1 || 0) / 1000)
                    ).toFixed(2) || 0
                  ).toLocaleString("en-US")}
                </span>
                &nbsp;
                <span style={{ fontSize: "24px", color: "grey" }}>
                  {showUnit(props.cal?.bat_1 || 0)}W
                </span>
              </div>
            </div>
          </div>

          <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Line"></div>

          <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row">
            <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left">
              <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Tit">
                {dataLang.formatMessage({ id: "charge" })}
              </div>

              <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data">
                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "today" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(props.cal?.bat_in_1 || 0))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(props.cal?.bat_in_1 || 0)}Wh
                    </span>
                  </div>
                </div>

                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "month" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(month.bat_in_month))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(month.bat_in_month)}Wh
                    </span>
                  </div>
                </div>

                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "year" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(year.bat_in_year))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(year.bat_in_year)}Wh
                    </span>
                  </div>
                </div>

                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "total" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(total.bat_in_total))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(total.bat_in_total)}Wh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left">
              <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Tit">
                {dataLang.formatMessage({ id: "discharge" })}
              </div>

              <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data">
                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "today" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(props.cal?.bat_out_1 || 0))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(props.cal?.bat_out_1 || 0)}Wh
                    </span>
                  </div>
                </div>

                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "month" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(month.bat_out_month))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(month.bat_out_month)}Wh
                    </span>
                  </div>
                </div>

                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "year" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(year.bat_out_year))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(year.bat_out_year)}Wh
                    </span>
                  </div>
                </div>

                <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item">
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Tit">
                    {dataLang.formatMessage({ id: "total" })}
                  </div>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_Battery_Row_Left_Data_Item_Data">
                    <span style={{ fontSize: "26px" }}>
                      {Number(
                        parseFloat(convertUnit(total.bat_out_total))
                      ).toLocaleString("en-US")}
                    </span>
                    &nbsp;
                    <span style={{ fontSize: "18px", color: "grey" }}>
                      {showUnitk(total.bat_out_total)}Wh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile">
          <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Data">
            <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Data_Img">
              <img
                src="/dat_icon/full-battery.png"
                alt=""
                style={{ width: "50px", height: "90px" }}
              />
            </div>

            <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Data_Status">
              <div>
                <span>SoC:</span>
                &nbsp;
                <span style={{ fontSize: "26px" }}>
                  {Number(
                    parseFloat(props.cal?.bat_2 || 0).toFixed(2)
                  ).toLocaleString("en-US")}
                </span>
                &nbsp;
                <span style={{ fontSize: "18px", color: "grey" }}>%</span>
              </div>
              {state ? (
                <FaArrowLeftLong color="green" size={30} />
              ) : (
                <FaArrowRightLong color="red" size={25} />
              )}
              <span style={{ fontSize: "16px" }}>
                {state
                  ? dataLang.formatMessage({ id: "charge" })
                  : dataLang.formatMessage({ id: "discharge" })}
              </span>
            </div>

            <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Data_Data">
              <div style={{ marginBottom: "8px", color: "grey" }}>
                {dataLang.formatMessage({ id: "batPower" })}
              </div>
              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "32px",
                    color: props.cal?.bat_1 < 0 ? "red" : "black",
                  }}
                >
                  {Number(
                    parseFloat(
                      convertUnit(Math.abs(props.cal?.bat_1 || 0) / 1000)
                    ).toFixed(2) || 0
                  ).toLocaleString("en-US")}
                </span>
                &nbsp;
                <span style={{ fontSize: "24px", color: "grey" }}>
                  {showUnit(props.cal?.bat_1 || 0)}W
                </span>
              </div>
            </div>
          </div>

          <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Line"></div>

          <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row">
            <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left">
              <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Tit"
                style={{ borderBottom: "solid 1px rgba(198, 197, 197, 0.5)" }}
              >
                {dataLang.formatMessage({ id: "charge" })}
              </div>

              <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data">
                <div style={{ flex: "5" }}>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "today" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(props.cal?.bat_in_1 || 0))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(props.cal?.bat_in_1 || 0)}Wh
                      </span>
                    </div>
                  </div>

                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "month" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(month.bat_in_month))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(month.bat_in_month)}Wh
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ flex: "5" }}>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "year" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(year.bat_in_year))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(year.bat_in_year)}Wh
                      </span>
                    </div>
                  </div>

                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "total" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(total.bat_in_total))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(total.bat_in_total)}Wh
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left">
              <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Tit"
                style={{ borderBottom: "solid 1px rgb(231, 231, 231)" }}
              >
                {dataLang.formatMessage({ id: "discharge" })}
              </div>

              <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data">
                <div style={{ flex: "5" }}>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "today" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(props.cal?.bat_out_1 || 0))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(props.cal?.bat_out_1 || 0)}Wh
                      </span>
                    </div>
                  </div>

                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "month" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(month.bat_out_month))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(month.bat_out_month)}Wh
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ flex: "5" }}>
                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "year" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(year.bat_out_year))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(year.bat_out_year)}Wh
                      </span>
                    </div>
                  </div>

                  <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item">
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Tit">
                      {dataLang.formatMessage({ id: "total" })}
                    </div>
                    <div className="DAT_ProjectData_Dashboard_Data_Center_BatteryMobile_Row_Left_Data_Item_Data">
                      <span style={{ fontSize: "26px" }}>
                        {Number(
                          parseFloat(convertUnit(total.bat_out_total))
                        ).toLocaleString("en-US")}
                      </span>
                      &nbsp;
                      <span style={{ fontSize: "18px", color: "grey" }}>
                        {showUnitk(total.bat_out_total)}Wh
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
