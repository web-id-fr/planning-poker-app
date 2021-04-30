<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TestingMercureBroadcast implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /** @var array<string, string> $estimation */
    public $estimation;

    /**
     * @param array<string, string> $estimation
     */
    public function __construct(array $estimation)
    {
        $this->estimation = $estimation;
    }

    /**
     * @return Channel
     */
    public function broadcastOn()
    {
        return new Channel(config('app.url') . '/testing-broadcast');
    }
}
