<?php

namespace App\Http\Controllers;
use App\Models\Progress;
use App\Models\Appointment;
use App\Models\Driver;
use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('progresses')
            ->join('drivers', 'progresses.driver_id', '=', 'drivers.id')
            ->join('clients', 'progresses.client_id', '=', 'clients.id')
            ->join('appointments', 'progresses.appointment_id', '=', 'appointment_id')
            ->select('clients.*', 'progressStatus', 'updatedAt')
            ->get(['progresses.id', 'appointment_title', 'client_name', 'progressStatus', 'updatedAt']);
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        $newProgress= new Progress;
        $newProgress->progress_id = $request->progress["progress_id"];
        $newProgress->progressStatus= $request->progress["progressStatus"];
        $newProgress->progressCompleted = $request->progress["progressCompleted"];
        $newProgress->driver_id = $request["driver_id"];
        $newProgress->client_id = $request["client_id"];
        $newProgress->appointment_id = $request["appointment_id"];
        $newProgress->updatedAt = $request["updatedAt"];
        $newProgress->progress_completed = 0;
        $newProgress->save();

        return $newProgress;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
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
        $validated = $request->validate([
            'progressStatus' => 'required',
        ]);
        //Find id
        $existingProgress = Progress::find($id);
        //Check progress existence
        if(!$existingProgress){
            return "Progress not found";
        }
        if(isset($request['progressStatus'])){
            $existingProgress->progressStatus = $request['progressStatus'];
        }
        if(isset($request['progressCompleted'])){
            $existingProgress->progressCompleted = $request['progressCompleted'];
        }
        if(isset($request['updatedAt'])){
            $existingProgress->updatedAt = $request['updatedAt'];
        }

        $existingProgress->save();
        return $existingProgress;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingProgress = Progress::find($id);
        
        if($existingProgress){
            $existingProgress->delete();
            return "Progress successfully deleted.";
        }
        return "Progress not found.";
    }
}
