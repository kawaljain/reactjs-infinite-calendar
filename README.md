# ReactJs Infinite Calendar

---

ReactJs Infinite Calendar is a library for generating Infinite scroll with single and multiple select.

## Features

- **Infinite scroll** – Just keep scrollin', just keep scrollin'
- **Flexible** – Min/max date, disabled dates, selected dates, etc.
- **Extensible** – Multiple date selection, Single Date Selection
- **Customizeable** – Customize Css according to your theme.
- **Mobile-friendly** – Silky smooth scrolling on mobile

## Getting Started

## Installation

```bash
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

## Prop Types

| Property                     | Type     | Default | Description                                                                                                              |
| :--------------------------- | :------- | :------ | :----------------------------------------------------------------------------------------------------------------------- |
| calendarWidth                | Number   | `450`   | Width of the calendar, in pixels                                                                                         |
| calendarHeight               | Number   | `600`   | Height of the calendar, in pixels                                                                                        |
| renderMinDate                | Date     |         | The minimum month that can be scrolled to, If inifinite scroll is true, then its disabled all dates before renderMinDate |
| renderMaxDate                | Date     |         | The maximum date that can be scrolled to, If inifinite scroll is true, then its disabled all dates after renderMaxDate   |
| visibleDate                  | Date     |         | The date is to be visible when calendar initinal render                                                                  |
| inifinityScroll              | Bool     | true    | Allow calendar to scroll inifinte times.                                                                                 |
| isMultipleSelect             | Bool     | false   | Allow to select multiple dates                                                                                           |
| disabledDates                | Array    | []      | Array of dates that should be disabled. For example: `["13-02-2022"]`                                                    |
| selectedDates                | Array    | []      | Array of dates that should be selected. for example ["13-02-2022"]                                                       |
| handleDateSelect             | Function |         | Callback invoked after date is selected.                                                                                 |
| calendarContainerClass       | String   | ''      | Class thats add to the main container of Calendar.                                                                       |
| calendarHeaderContainerClass | String   | ''      | Class thats add to ther header container of Calendar.                                                                    |
| calendarDateContainerClass   | String   | ''      | Class thats add to the date container of Calendar                                                                        |

## Reporting Issues

If you find an [issue](https://github.com/kawaljain/reactjs-infinite-calendar/issues), please report it along with any relevant details to reproduce it. Its is a great help to improving the packages

## Future Release

- **Date Range Selection**
- **Horizontal Scroll**
- **Customized Month To Render**

## Dependencies

React Infinite Calendar has very few dependencies. It relies on [`moment.js`](https://www.npmjs.com/package/moment),[`prop-types`](https://www.npmjs.com/package/prop-types). It also has the following peerDependencies: [`react`](https://www.npmjs.com/package/react).

## Author

[**Kawal Jain**]

## License

_reactjs-infinite-calendar_ is available under the [MIT](https://choosealicense.com/licenses/mit/) License.
