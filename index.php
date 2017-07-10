<?php 
	$path='index';//view下面文件夹的名称
	$filename='index';//文件夹下面文件名称（不包括文件后缀）
	if(isset($_SERVER['PATH_INFO'])){// 判断数组中是否包含对应的key
		$url=$_SERVER['PATH_INFO'];
		$str=substr($url,1);
		$pathinfo=explode('/',$str);
		if(count($pathinfo)==2){
			$path=$pathinfo[0];
			$filename=$pathinfo[1];
		}else{
			$filename='login';
		};
	}else{
			$filename='login';
	};
	include('./views/'.$path.'/'.$filename.'.html');
?>