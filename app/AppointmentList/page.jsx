"use client"
import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000';

export default function Home() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    const fetchData = async () => {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setAppointments(data);
    };

    fetchData();

    socket.on('appointmentUpdated', () => {
      fetchData();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSlotSelect = async (doctorId, timeSlot) => {
    // Implement logic to handle slot selection
    const patientId = 'your_patient_id'; // Replace with the actual patient ID

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientId, doctorId, timeSlot }),
      });

      if (response.ok) {
        // Slot reserved successfully
      } else {
        // Handle error, e.g., slot not available
      }
    } catch (error) {
      console.error('Error reserving slot:', error);
    }
  };

  return (
    <div>
      {/* Render your appointments and allow users to select slots */}
    </div>
  );
}