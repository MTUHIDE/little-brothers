<?php

namespace App\Http\Controllers;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

      // Ensure user data is provided and within length requirement
      $validated = $request->validate([
          'clientNotes' => 'required|max:255',
          'appDate' => 'required|date_format:Y-m-d\TH:i',
          'pickupAddress' => 'required|max:255',
          'dropoffAddress' => 'required|max:255',
      ]);

      $newAppointment = new Appointment;
      $date_time = $request["appDate"];

       // Format the date_time to fit MS SQL Server standard
      $date_time = Carbon::createFromFormat('Y-m-d\TH:i', $date_time, 'America/Detroit');
      $date_time->setTimezone('UTC');
      $date_time = $date_time->format('Y-m-d H:i:s.v');
      $newAppointment->appointment_notes = $request["clientNotes"];

      // return $date_time;
      $newAppointment->appointment_date_time = $date_time;
      // return $appointment_date_time;

      // $newAppointment->appointment_date_time;
      $newAppointment->pickup_address = $request["pickupAddress"];
      $newAppointment->destination_address = $request["dropoffAddress"];
      // $newAppointment->driver_id = $request->appointment["driverName"];
      // $newAppointment->client_id = $request->appointment["clientName"];
      $newAppointment->driver_id = 1;
      $newAppointment->client_id = 1;
      $newAppointment->is_cancelled = 0;
      $newAppointment->save();

      return $newAppointment;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
