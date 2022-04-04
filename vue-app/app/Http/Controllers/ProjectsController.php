<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Project;
class ProjectsController extends Controller{


    // show the page to create a new project
    public function create(){
        return view('project.create', [
            'project' => Project::all()
        ]);
    }
        // store a new project in the database

    public function store(){
        $this->validate(request(),[
            'name' => 'required',
            'description' => 'required',
        ]);

        Project::forceCreate([
            'name' => request('name'),
            'description' => request('description'),
        ]);

        return ['message' => 'Project created successfully'];
    }
};
