
import { serial,date,varchar,integer,boolean, pgTable,pgEnum,text,timestamp } from "drizzle-orm/pg-core";
import { One, relations,sql } from "drizzle-orm";
import { TypeOf } from "zod";

// authentication tables
export const authenticationTable = pgEnum("role", ['admin','user']);

// users Table
export const users = pgTable('users', {
  user_id: serial('user_id').notNull().primaryKey(),
  full_name: varchar('full_name').notNull(),
  email: varchar('email').notNull().unique(),
  user_name: varchar('username').notNull(),
  password: varchar('password').notNull(),
  contact_phone: varchar('contact_phone').notNull(),
  address: text('address').notNull(),
  role: authenticationTable("role").default("user"),
  created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
  updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
});

// profile table
export const profile = pgTable('profile', {
  profile_id: serial('profile_id').notNull().primaryKey(),
  user_id: integer('user_id').notNull().references(() => users.user_id,{onDelete:"cascade"}),
  bio: text('bio').notNull(),
  image: varchar('image').notNull(),
  location: varchar('location').notNull(),
  facebook: varchar('facebook').notNull(),
  instagram: varchar('instagram').notNull(),
  twitter: varchar('twitter').notNull(),
  created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
  updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
});

//   authentication table
export const authentication = pgTable('authentication', {
  auth_id: serial('auth_id').notNull().primaryKey(),
  user_id: integer('user_id').notNull().references(() => users.user_id, {onDelete:"cascade"}),
  user_name: varchar('username').notNull(),
  password: varchar('password').notNull(),
  created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
  updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
});

// Vehicle Specifications Table
export const vehicleSpecifications = pgTable('vehicle_specifications',{
  vehiclespec_id: serial('vehiclespec_id').notNull().primaryKey(),
  manufacturer: varchar('manufacturer').notNull(),
  model: varchar('model').notNull(),
  year: integer('year').notNull(),
  status:varchar('status').notNull(),
  price:integer('price').notNull(),
  price_type:varchar('price_type').notNull(),
  type:varchar('type'),
  location:varchar('location').notNull(),
  time: varchar('time').notNull(),
  transmission: varchar('transmission').notNull(),
  mileage: varchar('mileage').notNull(),
  fuel_type: varchar('fuel_type').notNull(),
  image: varchar('image'),
  engine_capacity: varchar('engine_capacity').notNull(),
  seating_capacity: integer('seating_capacity').notNull(),
  color: varchar('color'),
  features: varchar('features').notNull(),
})

// vehicles table  
  export const vehicle = pgTable('vehicle', {
    vehicle_id: serial('vehicle_id').primaryKey().notNull(),
    vehiclespec_id: integer('vehiclespec_id').notNull().references(() => vehicleSpecifications.vehiclespec_id,{onDelete:"cascade"}),
    rental_rate: integer('rental_rate').notNull(),
    availability: boolean('availability').notNull(),
    created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
    updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
  });


export const bookingStatus = pgEnum( "Status", ['Pending', 'Approved', 'Rejected']);

// booking table
export const bookings = pgTable('bookings', {
    booking_id: serial('booking_id').notNull().primaryKey(),
    user_id: integer('user_id').notNull().references(() => users.user_id),
    vehiclespec_id: integer('vehiclespec_id').notNull().references(() => vehicleSpecifications.vehiclespec_id,{onDelete:"cascade"}),
    location_id: integer('location_id').notNull().references(() => locations.location_id,{onDelete:"cascade"}),
    booking_date: date('booking_date').notNull(),
    return_date: date('return_date').notNull(),
    total_amount: integer('total_amount').notNull(),
    booking_status: bookingStatus('booking_status').default('Pending').notNull(),
    created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
    updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
  });
  

//   payment table
export const payments = pgTable('payments', {
    payment_id: serial('payment_id').notNull().primaryKey(),
    booking_id: integer('booking_id').notNull().references(() => bookings.booking_id,{onDelete:"cascade"}),
    amount: integer('amount').notNull(),
    payment_status: bookingStatus('payment_status').default('Pending').notNull(),
    payment_date: date('payment_date').notNull(),
    payment_method: varchar('payment_method').notNull(),
    transaction_id: integer('transaction_id').notNull(),
    created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
    updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
  });
  


//   Customer Support Tickets Table
export const customerSupportTickets = pgTable('customer_support_tickets', {
    ticket_id: serial('ticket_id').notNull().primaryKey(),
    user_id: integer('user_id').notNull().references(() => users.user_id,{onDelete:"cascade"}),
    subject: varchar('subject').notNull(),
    description: text('description').notNull(),
    status: varchar('status').notNull(),
    created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
    updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
  });

//   Location and Branches Table
  export const locations = pgTable('locations', {
    location_id: serial('location_id').notNull().primaryKey(),
    name: varchar('name').notNull(),
    address: text('address').notNull(),
    contact_phone: varchar('contact_phone').notNull(),
    created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
    updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
  });
  

// Fleet Management Table
  export const fleetManagement = pgTable('fleet_management', {
    fleet_id: serial('fleet_id').notNull().primaryKey(),
    vehiclespec_id: integer('vehiclespec_id').notNull().references(() =>vehicleSpecifications.vehiclespec_id, {onDelete:"cascade"}),
    acquisition_date: date('acquisition_date').notNull(),
    depreciation_rate: integer('depreciation_rate').notNull(),
    current_value: integer('current_value').notNull(),
    maintenance_cost: integer('maintenance_cost').notNull(),
    status: varchar('status').notNull(),
    created_at: timestamp('created_at').default(sql`NOW()`).notNull(),
    updated_at: timestamp('update_at').default(sql`NOW()`).notNull()
  });
  
  
//   relations

// user table relations

export const userRelations = relations(users,({one,many})=>({
  auth:one(authentication,{fields:[users.user_id],references:[authentication.user_id]}),
  booking: one(bookings,{fields:[users.user_id],references:[bookings.user_id]}),
  profile: one(profile,{fields:[users.user_id],references:[profile.user_id]}),
  ticket: one(customerSupportTickets,{fields:[users.user_id],references:[customerSupportTickets.user_id]}),
  bookings:many(bookings),
  tickets:many(customerSupportTickets)
}));

// profile relations

export const profileRelations = relations(profile,({one})=>({
  user: one(users,{fields:[profile.user_id],references:[users.user_id]}),
}));
// bookings relations
export const bookingRelations = relations(bookings,({one,many})=>({
  vehicleSpec: one(vehicleSpecifications,{fields:[bookings.vehiclespec_id],references:[vehicleSpecifications.vehiclespec_id]}),
  location: one(locations,{fields:[bookings.location_id],references:[locations.location_id]}),
  payment:one(payments,{fields:[bookings.booking_id],references:[payments.booking_id]}),
  payments: many(payments),
  locations:many(locations),
  vehicleSpecifications:many(vehicleSpecifications)
}));

// vehiclespecifications relations
export const vehicleSpecificationsRelations = relations(vehicleSpecifications,({one, many})=>({
  vehicle: one(vehicle,{fields:[vehicleSpecifications.vehiclespec_id],references:[vehicle.vehicle_id]}),
  fleetManagement: one(fleetManagement,{fields:[vehicleSpecifications.vehiclespec_id],references:[fleetManagement.vehiclespec_id]}),
  vehicles:many(vehicle),
  fleetManagements: many(fleetManagement)
}));


// infer types

// users table
export type TIUser = typeof users.$inferInsert
export type TSUser = typeof users.$inferSelect

// vehicle specifications table
export type TIVehicleSpecifications = typeof vehicleSpecifications.$inferInsert
export type TSVehicleSpecifications = typeof vehicleSpecifications.$inferSelect

// vehicle table
export type TIVehicle = typeof vehicle.$inferInsert
export type TSVehicle = typeof vehicle.$inferSelect

// bookings table
export type TIBookings = typeof bookings.$inferInsert
export type TSBookings = typeof bookings.$inferSelect

// payments table
export type TIPayments = typeof payments.$inferInsert
export type TSPayments = typeof payments.$inferSelect

// customersupport tickets
export type TICustomerSupportTickets = typeof customerSupportTickets.$inferInsert
export type TSCustomerSupportTickets = typeof customerSupportTickets.$inferSelect

// locations
export type TILocations = typeof locations.$inferInsert
export type TSLocations = typeof locations.$inferSelect

// fleet management
export type TIFleetManagement = typeof fleetManagement.$inferInsert
export type TSFleetManagement = typeof fleetManagement.$inferSelect