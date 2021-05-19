<?php

namespace App\Http\Controllers;

use App\Models\KhojTheSearch;
use Illuminate\Http\Request;

class DoSomethingController extends Controller
{
    public function doSomething(Request $request){

        $string = $request->inputValue;
        $str_arr = explode (",", $string);
        rsort($str_arr);
        $search = array_search($request->searchValue , $str_arr, true);
        $str_arr = implode (",", $str_arr);

        $data = new KhojTheSearch();
        $data->user_id = auth()->user()->id;
        $data->input_value =$str_arr;
        $data->search_value =$request->searchValue;

        if ($search === false) {
            $data->result =0;
            $result = 'false';
        }else {
            $data->result =1;
            $result = 'true';
        }
        $data->save();

        $message= [
            'message'=> 'success',
            'result' => $result
        ] ;

        return response()->json($message,200);
    }
    public function getData(Request $request){

//        dd($request->all());
        $result = KhojTheSearch::select('input_value', 'created_at')
        ->where('user_id',auth()->user()->id)
        ->whereBetween('created_at',[$request->start_date, $request->end_date ])
           ->get()->toArray();

        $message= [
            'message'=> 'success',
            'user_id' => auth()->user()->id,
            'payload' => $result
        ] ;

        return response()->json($message,200);;

    }
}
