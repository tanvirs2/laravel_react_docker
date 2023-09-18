<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news_and_articles', function (Blueprint $table) {
            $table->id();
            $table->text('img')->nullable();
            $table->text('title');
            $table->text('short_description')->nullable();
            $table->text('description');
            $table->string('category');
            $table->string('author');
            $table->string('source');
            $table->string('publish_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news_and_articles');
    }
};
