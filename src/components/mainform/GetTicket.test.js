import GetTicket from './GetTicket'

describe("Testing the get Ticket function to confirm the output returned", () => {
    test("Find suitable Tickets if age is more than 60" , () => {
        const userValues = {
            name: "Linda",
            age: "66",
            email: "",
            children: 0,
            adults: 0,
            days: "45",
            zone: "ABC"
        }
        const tickets = GetTicket(userValues);
        expect(tickets).toEqual(["Special Senior Citizen Monthly Ticket ABC", "Special Senior Citizen Day Ticket ABC","Special Senior Citizen Weekly Ticket ABC"])
    })
    test("Find suitable Tickets if age is less than 60 and having co-travellers" , () => {
        const userValues = {
            name: "Emily",
            age: "36",
            email: "",
            children: 2,
            adults: 6,
            days: "9",
            zone: "AB"
        }
        const tickets = GetTicket(userValues);
        expect(tickets).toEqual( ["Small Group Day Ticket(Upto 6 people)", "Weekly Ticket AB", 
        "Day Ticket AB", "Reduced Fare Weekly Ticket(Age 6 - 14)", "Reduced Fare Day Ticket(Age 6 - 14)"])
    });
    test("Find suitable Tickets if age is less than 60" , () => {
        const userValues = {
            name: "David",
            age: "23",
            email: "",
            children: 1,
            adults: 0,
            days: "20",
            zone: "BC"
        }
        const tickets = GetTicket(userValues);
        expect(tickets).toEqual(["Weekly Ticket BC","Day Ticket BC","Reduced Fare Weekly Ticket(Age 6 - 14)","Reduced Fare Day Ticket(Age 6 - 14)"]);
    });
    test("Find suitable Tickets if age is less than 60 and large group" , () => {
        const userValues = {
            name: "Norah",
            age: "59",
            email: "",
            children: 5,
            adults: 12,
            days: "3",
            zone: "AB"
        }
        const tickets = GetTicket(userValues);
        expect(tickets).toEqual(["Small Group Day Ticket(Upto 6 people)", "Group Day Ticket(Upto 12 people)", 
        "Day Ticket AB", "Reduced Fare Day Ticket(Age 6 - 14)"])
    });
    test("Find suitable Tickets for adult travelling alone" , () => {
        const userValues = {
            name: "Norah",
            age: "23",
            email: "",
            children: 0,
            adults: 0,
            days: "31",
            zone: "ABC"
        }
        const tickets = GetTicket(userValues);
        expect(tickets).toEqual(["Monthly Ticket ABC", "Weekly Ticket ABC", "Day Ticket ABC"])
    })

});