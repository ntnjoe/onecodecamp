// class Item {
// 	constructor(name, price, stock) {
// 		this.name = name;
// 		this.price = price;
// 		this.stock = stock;
// 		this.sold = 0;
// 	}
// 	logDetails() {
// 		console.log(`Item Name: ${this.name}`);
// 		console.log(`Price: ${this.price}`);
// 		console.log(`Stocks: ${this.stock}`);
// 		console.log(`Sold: ${this.sold}`);
// 	}
// 	buy() {
// 		if (this.stock <= 0) {
// 			console.log(`No more ${this.name} stocks left`);
// 			console.log("- - - - -");
// 		} else {
// 			console.log(`Buying ${this.name}`);
// 			console.log("- - - - -");

// 			this.sold++;
// 			this.stock--;
// 		}
// 	}
// 	return() {
// 		if (this.sold <= 0) {
// 			console.log(`No ${this.name} stock was sold`);
// 			console.log("- - - - -");
// 		} else {
// 			console.log(`Returning ${this.name}`);
// 			console.log("- - - - -");

// 			this.sold--;
// 		}
// 	}
// }
// const item1 = new Item("Pen", 10, 5);
// item1.buy();
// item1.buy();
// item1.buy();
// item1.return();
// item1.logDetails();
// const item2 = new Item("Notebook", 50, 2);
// item2.buy();
// item2.buy();
// item2.return();
// item2.return();
// item2.logDetails();
// const item3 = new Item("Book", 200, 3);
// item3.return();
// item3.return();
// item3.return();

//activity2
// class House {
// 	constructor(location, price, lot, type) {
// 		this.location = location;
// 		this.price = price;
// 		this.lot = lot;
// 		this.type = type;
// 		this.discount = type == "Pre-selling" ? 0.2 : 0.05;
// 		this.show_all();
// 	}
// 	show_all() {
// 		console.log("Location:", this.location);
// 		console.log("Price:", this.price);
// 		console.log("Lot:", this.lot);
// 		console.log("Type:", this.type);
// 		console.log("Discount:", this.discount);
// 		console.log("Total Price:", this.price - this.price * this.discount);
// 	}
// }
// const house1 = new House("La Union", 1500000, "100sqm", "Pre-selling");
// const house2 = new House("Metro Manila", 1000000, "150sqm", "Ready for Occupancy");

class EmailBuilder {
	constructor() {
		this.recipient;
		this.subject;
		this.body;
		this.attachments = [];
		this.setRecipient();
	}
	setRecipient() {
		this.recipient = prompt("Enter recipient: ");
		this.setSubject();
	}
	setSubject() {
		this.subject = prompt("Enter Subject: ");
		this.setBody();
	}
	setBody() {
		this.body = prompt("Enter body: ");
		this.setAttachments();
	}
	setAttachments() {
		const input = prompt("Enter attachments: ");
		this.attachments = [...input.split(",")];
	}
	send() {
		console.log("Sending Email:");
		console.log("Recipient:", this.recipient);
		console.log("Subject:", this.subject);
		console.log("Body:", this.body);
		console.log("Attachments:", this.attachments);
	}
}
const email1 = new EmailBuilder();
email1.send();
