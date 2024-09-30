import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterClient3 = ({
  setComponentView,
  setProgress,
  setDataClient,
}) => {
  const [occasional, setOccasional] = useState(false);
  const [week, setWeek] = useState({
    L: false,
    M: false,
    X: false,
    J: false,
    V: false,
    S: false,
    D: false,
  });
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [time, setTime] = useState();

  const handleOccasional = (e) => {
    setOccasional(e.target.checked);
  };
  const handleWeek = (e) => {
    setWeek((prov) => ({ ...prov, [e.target.id]: e.target.checked }));
  };
  const handleDay = (e) => {
    setDay(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleHour = (e) => {
    setHour(e.target.value);
  };
  const handleMin = (e) => {
    setMin(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleNextView = () => {
    setComponentView(4);
    setProgress((100 / 6) * 4);
    setDataClient((prov) => ({
      ...prov,
      reservationOccasional: occasional,
      reservationWeek: week,
      reservationDay: [day, month, year],
      reservationHour: [hour, min],
      reservationTime: time,
    }));
  };
  return (
    <>
      <div className="container-xxl">
        <h3>Fechas</h3>
        <p>¿Para cuándo?</p>
        <Form onClick={handleOccasional}>
          {!week.L &&
            !week.M &&
            !week.X &&
            !week.J &&
            !week.V &&
            !week.S &&
            !week.D && (
              <Form.Check
                inline
                label="Ocasional"
                name="group1"
                type={"checkbox"}
                id={"1"}
              />
            )}
        </Form>
        <Form onClick={handleWeek}>
          {!occasional && (
            <div>
              <p>Días de la semana</p>
              <Form.Check
                inline
                label="L"
                name="group2"
                type={"checkbox"}
                id={"L"}
              />
              <Form.Check
                inline
                label="M"
                name="group2"
                type={"checkbox"}
                id={"M"}
              />
              <Form.Check
                inline
                label="X"
                name="group2"
                type={"checkbox"}
                id={"X"}
              />
              <Form.Check
                inline
                label="J"
                name="group2"
                type={"checkbox"}
                id={"J"}
              />
              <Form.Check
                inline
                label="V"
                name="group2"
                type={"checkbox"}
                id={"V"}
              />
              <Form.Check
                inline
                label="S"
                name="group2"
                type={"checkbox"}
                id={"S"}
              />
              <Form.Check
                inline
                label="D"
                name="group2"
                type={"checkbox"}
                id={"D"}
              />
            </div>
          )}
        </Form>
        <p>Día</p>
        <Form.Select aria-label="Default select example" onClick={handleDay}>
          <option>Seleciona día</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" onClick={handleMonth}>
          <option>Seleciona mes</option>
          <option value="1">Enero</option>
          <option value="2">Febrero</option>
          <option value="3">Marzo</option>
          <option value="4">Abril</option>
          <option value="5">Mayo</option>
          <option value="6">Junio</option>
          <option value="7">Julio</option>
          <option value="8">Agosto</option>
          <option value="9">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" onClick={handleYear}>
          <option>Seleciona año</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </Form.Select>
        <p>Hora</p>
        <Form.Select aria-label="Default select example" onClick={handleHour}>
          <option>Hora</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="00">00</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" onClick={handleMin}>
          <option>Minuto</option>
          <option value="00">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
          <option value="49">49</option>
          <option value="50">50</option>
          <option value="51">51</option>
          <option value="52">52</option>
          <option value="53">53</option>
          <option value="54">54</option>
          <option value="55">55</option>
          <option value="56">56</option>
          <option value="57">57</option>
          <option value="58">58</option>
          <option value="59">59</option>
        </Form.Select>
        <p>¿Cuántas horas lo necesitas?</p>
        <Form.Select aria-label="Default select example" onClick={handleTime}>
          <option>Hora</option>
          <option value="1">1 hora</option>
          <option value="2">2 hora</option>
          <option value="3">3 hora</option>
          <option value="4">4 hora</option>
          <option value="5">5 hora</option>
          <option value="6">6 hora</option>
          <option value="7">7 hora</option>
          <option value="8">8 hora</option>
        </Form.Select>
      </div>

      <button onClick={handleNextView}>Siguiente</button>
    </>
  );
};
