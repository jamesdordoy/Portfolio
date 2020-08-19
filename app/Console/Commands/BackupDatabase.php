<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class BackupDatabase extends Command
{
    protected $signature = 'db:backup';

    protected $description = 'Backup the database';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $ds = DIRECTORY_SEPARATOR;

        $host = env('DB_HOST');
        $username = env('DB_USERNAME');
        $password = env('DB_PASSWORD');
        $database = env('DB_DATABASE');

        $ts = time();

        $path = database_path() . $ds . 'backups' . $ds . date('Y', $ts) . $ds . date('m', $ts) . $ds . date('d', $ts) . $ds;
        $file = date('Y-m-d-His', $ts) . '-dump-' . $database . '.sql';
        $command = sprintf('mysqldump -h %s -u %s -p\'%s\' %s > %s --no-tablespaces', $host, $username, $password, $database, $path . $file);

        is_dir($path) ?: mkdir($path, 0755, true);

        exec($command);
    }
}
