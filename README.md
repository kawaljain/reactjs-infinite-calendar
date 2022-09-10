# ReactJs Infinite Calendar

## Features

- **Infinite scroll** – Just keep scrollin', just keep scrollin'
- **Flexible** – Min/max date, disabled dates, selected dates, etc.
- **Extensible** – Multiple date selection, Single Date Selection
- **Customizeable** – Customize Css according to your theme.
- **Mobile-friendly** – Silky smooth scrolling on mobile

## Getting Started

## Installation

```sh
npm install reactjs-infinite-calendar
```

## Usage

**_Step 1_**

```sh
npm install reactjs-infinite-calendar
```

**_Step 2_**

```sh
import InfinitCalendar from "reactjs-infinite-calendar";
```

**_Step 3_**

```sh
    <InfinitCalendar
        calendarHeight={600}
        calendarWidth={500}
         renderMinDate={new Date(2022, 0, 1)}
        renderMaxDate={new Date(2022, 11, 31)}
        inifinityScroll={true}
        isMultipleSelect={true}
        selectedDates={["02-09-2022"]}
        handleDateSelect={(date) => {
            console.log(date);
        }}
        disabledDates={["01-09-2022"]}
    />
```

## License

_reactjs-infinite-calendar_ is available under the MIT License.

## Author

**Kawal Jain**
