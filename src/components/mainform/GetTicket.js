import { ticketTypes } from "./TicketTypes";

const getTicket = (values) => {
  let tickets = [];
   console.log(tickets)
  //get available tickets for senior citizens(age>60) based on duration of stay and selected zone
  if (parseInt(values.age) >= 60 && values.zone === "AB") {
    console.log(parseInt(values.age))
    if (parseInt(values.days) <= 6) {
      tickets.push(ticketTypes.get("sixtyDayAb"));
    } else if (parseInt(values.days) >= 7 && parseInt(values.days) < 30) {
      tickets.push(
        ticketTypes.get("sixtyWeekAb"),
        ticketTypes.get("sixtyDayAb")
      );
    } else if (parseInt(values.days) >= 30) {
      tickets.push(
        ticketTypes.get("sixtyMonthAb"),
        ticketTypes.get("sixtyDayAb"),
        ticketTypes.get("sixtyWeekAb")
      );
    }
  }
  if (parseInt(values.age) >= 60 && values.zone === "BC") {
    if (parseInt(values.days) <= 6) {
      tickets.push(ticketTypes.get("sixtyDayBc"));
    } else if (parseInt(values.days) >= 7 && parseInt(values.days) < 30) {
      tickets.push(
        ticketTypes.get("sixtyWeekBc"),
        ticketTypes.get("sixtyDayBc")
      );
    } else if (parseInt(values.days) >= 30) {
      tickets.push(
        ticketTypes.get("sixtyMonthBc"),
        ticketTypes.get("sixtyDayBc"),
        ticketTypes.get("sixtyWeekBc")
      );
    }
  }
  if (parseInt(values.age) >= 60 && values.zone === "ABC") {
    if (parseInt(values.days) <= 6) {
      tickets.push(ticketTypes.get("sixtyDayAbc"));
    } else if (parseInt(values.days) >= 7 && parseInt(values.days) < 30) {
      tickets.push(
        ticketTypes.get("sixtyWeekAbc"),
        ticketTypes.get("sixtyDayAbc")
      );
    } else if (parseInt(values.days) >= 30) {
      tickets.push(
        ticketTypes.get("sixtyMonthAbc"),
        ticketTypes.get("sixtyDayAbc"),
        ticketTypes.get("sixtyWeekAbc")
      );
    }
  }

  //get tickets for groups
  if (values.adults >= 6) {
    tickets.push(ticketTypes.get("smallGroup"));
  }
  if (values.adults >= 9) {
    tickets.push(ticketTypes.get("group"));
  }

  //get ticket day tickets for different zones
  if (parseInt(values.days) <= 6 && parseInt(values.age) < 60) {
    if (values.zone === "ABC") {
      tickets.push(ticketTypes.get("dayAbc"));
    } else if (values.zone === "BC") {
      tickets.push(ticketTypes.get("dayBc"));
    } else if (values.zone === "AB") {
      tickets.push(ticketTypes.get("dayAb"));
    }
  }

  //get ticket weekly tickets for different zones
  if (parseInt(values.days) >= 7 && parseInt(values.days) < 30) {
    if (values.zone === "ABC") {
      tickets.push(ticketTypes.get("weekAbc"), ticketTypes.get("dayAbc"));
    } else if (values.zone === "BC") {
      tickets.push(ticketTypes.get("weekBc"), ticketTypes.get("dayBc"));
    } else if (values.zone === "AB") {
      tickets.push(ticketTypes.get("weekAb"), ticketTypes.get("dayAb"));
    }
  }

  //get monthly tickets for different zones
  if (parseInt(values.days) >= 30 && parseInt(values.age) < 60) {
    if (values.zone === "ABC") {
      tickets.push(
        ticketTypes.get("monthAbc"),
        ticketTypes.get("weekAbc"),
        ticketTypes.get("dayAbc")
      );
    } else if (values.zone === "BC") {
      tickets.push(
        ticketTypes.get("monthBc"),
        ticketTypes.get("weekBc"),
        ticketTypes.get("dayBc")
      );
    } else if (values.zone === "AB") {
      tickets.push(
        ticketTypes.get("monthAb"),
        ticketTypes.get("weekAb"),
        ticketTypes.get("dayAb")
      );
    }
  }

  //get children tickets for different zones (for children there is no fare difference based on zone)
  console.log(values.children,)
  if (parseInt(values.children) >= 1) {
    if (parseInt(values.days) <= 6) {
      tickets.push(ticketTypes.get("childDay"));
    } else if (parseInt(values.days) >= 7 && parseInt(values.days) < 30) {
      tickets.push(ticketTypes.get("childWeek"), ticketTypes.get("childDay"));
    } else if (parseInt(values.days) >= 30) {
      tickets.push(
        ticketTypes.get("ChildDay"),
        ticketTypes.get("childWeek"),
        ticketTypes.get("childMonth")
      );
    }
  }

  return tickets;
};
export default getTicket;
