<?php

namespace Tests\Unit;

use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_driver()
    {
        $response = $this->get('/driver');
        $response ->assertStatus(200);
    }
    public function test_driver_prev()
    {
        $response = $this->get('/driver/prev-updates');
        $response ->assertStatus(200);
    }
    public function test_driver_update()
    {
        $response = $this->get('/driver/update');
        $response ->assertStatus(200);
    }
}
