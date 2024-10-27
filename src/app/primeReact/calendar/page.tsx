"use client";

import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import { Fieldset } from "primereact/fieldset";
import { Dropdown } from "primereact/dropdown";
import { Calendar as PrimeCalendar } from "primereact/calendar";
import { Button } from "primereact/button";

interface EventType {
  name: string;
  code: string;
  color: string;
}

const eventTypes: EventType[] = [
  { name: "会議", code: "meeting", color: "blue" },
  { name: "プレゼン", code: "presentation", color: "green" },
  { name: "ワークショップ", code: "workshop", color: "red" },
];

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  color: string;
  allDay: boolean;
}

export default function Page() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEventType, setSelectedEventType] = useState<EventType>(
    eventTypes[0]
  );
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const calendarRef = useRef<FullCalendar | null>(null); // FullCalendarのrefを設定

  // 年と月の選択肢を定義
  const years = Array.from({ length: 10 }, (_, i) => ({
    label: `${new Date().getFullYear() - 5 + i}年`,
    value: new Date().getFullYear() - 5 + i,
  }));

  const months = Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}月`,
    value: i, // インデックスを0始まりに修正
  }));

  // 年変更時の処理
  const handleYearChange = (e: { value: number }) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(e.value);
    setCurrentDate(newDate);
    calendarRef.current?.getApi().gotoDate(newDate); // カレンダーの日付を更新
  };

  // 月変更時の処理
  const handleMonthChange = (e: { value: number }) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(e.value); // 月の値をそのままセット
    setCurrentDate(newDate);
    calendarRef.current?.getApi().gotoDate(newDate); // カレンダーの日付を更新
  };

  const handleAddEvent = (selectedDate: Date | null) => {
    if (selectedEventType && selectedDate) {
      const newEvent: CalendarEvent = {
        id: String(new Date().getTime()),
        title: selectedEventType.name,
        start: new Date(selectedDate),
        color: selectedEventType.color,
        allDay: true,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      alert("イベントの種類と日付を選択してください");
    }
  };

  const handleNextDay = () => {
    if (!selectedEventId) return;
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === selectedEventId
          ? {
              ...event,
              start: new Date(event.start.getTime() + 24 * 60 * 60 * 1000),
            }
          : event
      )
    );
  };

  const handlePreviousDay = () => {
    if (!selectedEventId) return;
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === selectedEventId
          ? {
              ...event,
              start: new Date(event.start.getTime() - 24 * 60 * 60 * 1000),
            }
          : event
      )
    );
  };

  const handleDeselectEvent = () => {
    setSelectedEventId(null); // 選択を解除
  };

  const handleEventClick = (info: any) => {
    setSelectedEventId(info.event.id);
  };

  return (
    <>
      <Fieldset legend="イベントの追加" toggleable>
        {/* イベントの種類と日付選択 */}
        <div className="p-field p-grid">
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
        <Button
          label="イベントを追加"
          icon="pi pi-plus"
          onClick={() => handleAddEvent(currentDate)}
        />
      </Fieldset>

      {/* 年と月のドロップダウン */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Dropdown
          value={currentDate.getFullYear()}
          options={years}
          onChange={handleYearChange}
          placeholder="年を選択"
        />
        <Dropdown
          value={currentDate.getMonth()}
          options={months}
          onChange={handleMonthChange}
          placeholder="月を選択"
        />
      </div>

      {/* FullCalendar */}
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={jaLocale}
        events={events.map((event) => ({
          ...event,
          backgroundColor:
            event.id === selectedEventId ? "yellow" : event.color,
        }))}
        eventClick={handleEventClick}
        editable
        height="auto"
        headerToolbar={{
          left: "",
          center: "title",
          right: "today prev,next",
        }}
        datesSet={(dateInfo) => {
          const newDate = new Date(dateInfo.start);
          newDate.setMonth(newDate.getMonth() + 1); // カレンダーの月を調整
          setCurrentDate(newDate);
        }}
      />
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
      <Button
        label="選択解除"
        icon="pi pi-times"
        onClick={handleDeselectEvent}
        className="p-button-secondary"
        style={{ marginLeft: "10px" }}
      />
    </>
  );
}
