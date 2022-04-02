<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('progresses', function (Blueprint $table) {
            $table->id()->unique();
            $table->unsignedBigInteger('driver_id');
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('appointment_id');
            $table->string('status')->nullable();
            $table->boolean('completed')->default(false);
            $table->timestamps();

            $table->foreign('driver_id')->references('id')->on('drivers');
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('appointment_id')->references('id')->on('appointments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('progress');
    }
}
