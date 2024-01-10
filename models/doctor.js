import mongoose, { Schema, models } from "mongoose";
const doctorSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String,
    },
    age: {
      type: Number
    },
    specialization: {
      type: String,
    },

    qualification: {
      type: String
    },

    exp: {
      type: String
    },

    amount: {
      type: String
    },

    address: {
      type: String,
    },

    gender: {
      type: String
    },

    isDoctor: {
      type: Boolean,
      default: false
    },

    Appointments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
    }],

    Patients: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient'
  }],

  },
  { timestamps: true }
);
const Doctor = models.Doctor || mongoose.model("Doctor", doctorSchema);
export default Doctor;