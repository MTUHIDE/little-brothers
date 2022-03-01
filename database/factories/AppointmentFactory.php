<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
          'appointment_title' => $this->faker->sentence(3),
          'appointment_date_time' => $this->faker->dateTimeBetween($startDate = '-2 months', $endDate = '+2 months', $timezone = null),
          // 'appointment_date_time' => $this->faker->dateTimeThisMonth()->format('Y-m-d H:i:s.v'),
          'appointment_notes' => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
          'pickup_address' => $this->faker->address(),
          'destination_address' => $this->faker->address(),
          'is_cancelled' => 0,
          'client_id' => $this->faker->numberBetween($min = 1, $max = 15),
          'driver_id' => $this->faker->numberBetween($min = 1, $max = 15),
        ];
    }
}
