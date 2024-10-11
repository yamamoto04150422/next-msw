"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // フルカレンダーのコンポーネント
import dayGridPlugin from "@fullcalendar/daygrid"; // 日表示のプラグイン
import timeGridPlugin from "@fullcalendar/timegrid"; // 時間表示のプラグイン
import interactionPlugin from "@fullcalendar/interaction"; // クリックやドラッグのためのプラグイン
import jaLocale from "@fullcalendar/core/locales/ja"; // 日本語ロケール
import { Fieldset } from "primereact/fieldset"; // PrimeReactのFieldset
import { Dropdown } from "primereact/dropdown"; // PrimeReactのDropdown
import { Calendar as PrimeCalendar } from "primereact/calendar"; // PrimeReactのCalendar
import { Button } from "primereact/button"; // PrimeReactのButton

// イベントの型定義
interface EventType {
  name: string; // labelをnameに変更
  code: string; // valueをcodeに変更
  color: string;
}

// ドロップダウンの選択肢
const eventTypes: EventType[] = [
  { name: "会議", code: "meeting", color: "blue" },
  { name: "プレゼン", code: "presentation", color: "green" },
  { name: "ワークショップ", code: "workshop", color: "red" },
];

interface CalendarEvent {
  title: string;
  start: Date;
  color: string;
  allDay: boolean;
}

export default function Page() {
  const [events, setEvents] = useState<CalendarEvent[]>([]); // イベントの型を指定
  const [selectedEventType, setSelectedEventType] = useState<EventType>(
    eventTypes[0]
  ); // 最初のオプションを初期値に
  const [currentDate, setCurrentDate] = useState<Date>(new Date()); // 現在の日付を管理

  // イベントの追加処理
  const handleAddEvent = (selectedDate: Date | null) => {
    if (selectedEventType && selectedDate) {
      const newEvent: CalendarEvent = {
        title: selectedEventType.name,
        start: selectedDate,
        color: selectedEventType.color,
        allDay: true, // 時間を表示するか
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      alert("イベントの種類と日付を選択してください");
    }
  };

  // 日付を1日増やす処理
  const handleNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  // 日付を1日減らす処理
  const handlePreviousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  return (
    <>
      <Fieldset legend="イベントの追加" toggleable>
        <div className="p-field p-grid">
          {/* Dropdown for event type */}
          <div className="p-col-6">
            <Dropdown
              value={selectedEventType.code}
              options={eventTypes}
              onChange={(e) => {
                const selectedType = eventTypes.find(
                  (type) => type.code === e.value
                );
                if (selectedType) {
                  setSelectedEventType(selectedType);
                }
              }}
              placeholder="イベントの種類を選択"
              optionLabel="name"
              optionValue="code"
            />
          </div>

          {/* Calendar for date selection */}
          <div className="p-col-6">
            <PrimeCalendar
              value={currentDate}
              onChange={(e) => setCurrentDate(e.value as Date)}
              placeholder="日付を選択"
              dateFormat="yy-mm-dd"
              showIcon
            />
          </div>
        </div>

        {/* Button to add event */}
        <Button
          label="イベントを追加"
          icon="pi pi-plus"
          onClick={() => handleAddEvent(currentDate)} // currentDateを引数に渡す
        />
      </Fieldset>

      {/* FullCalendar */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={jaLocale}
        events={events}
        // initialDate={currentDate} // 現在の日付を初期表示
        eventClick={(info) => {
          // イベント名と日付を取得し、アラートで表示
          const eventTitle = info.event.title;
          const eventDate = info.event.start; // イベントの日付 (Dateオブジェクト)

          // 日付をフォーマットする（例: yyyy-mm-dd 形式）
          const formattedDate = eventDate?.toISOString().split("T")[0];

          alert(`イベント: ${eventTitle}\n日付: ${formattedDate}`);
        }}
        editable
      />

      {/* 日付を操作するフッターボタン */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          label="前日"
          icon="pi pi-arrow-left"
          onClick={handlePreviousDay}
        />
        <Button
          label="次日"
          icon="pi pi-arrow-right"
          onClick={handleNextDay}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </>
  );
}
