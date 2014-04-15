<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"> 
        <meta charset="utf-8">
        <title>Bootply.com - Bootstrap Bootstrap Google Plus - Image Cards</title>
        <title>http://www.bootply.com/95501</title>
        <meta name="generator" content="Bootply" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/styles.css') }}">

        <!--
        <script type="text/javascript" src="{{ asset('js/lib/less/dist/less-1.1.0.min.js') }}"></script>
        -->
        <script type="text/javascript" src="{{ asset('js/lib/jquery/dist/jquery.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/lib/bootstrap/dist/js/bootstrap.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/lib/underscore/underscore.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/lib/backbone/backbone.js') }}"></script>
        
        
        <!--[if lt IE 9]>
          <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    <head>
	<body>
		@section('header')
			<div class="navbar navbar-fixed-top header">
				<div class="col-md-12">
					<div class="navbar-header">
						<a href="#" class="navbar-brand">Bootstrap</a>
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse1">
							<i class="glyphicon glyphicon-search"></i>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="navbar-collapse1">
						<form class="navbar-form pull-left">
							<div class="input-group" style="max-width:470px;">
								<input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
								<div class="input-group-btn">
									<button class="btn btn-default btn-primary" type="submit"><i class="glyphicon glyphicon-search"></i></button>
								</div>
							</div>
						</form>
						<ul class="nav navbar-nav navbar-right">
							<li><a href="http://www.bootply.com" target="_ext">Bootply+</a></li>
							<li>
								<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-bell"></i></a>
								<ul class="dropdown-menu">
									<li><a href="#"><span class="badge pull-right">40</span>Link</a></li>
									<li><a href="#"><span class="badge pull-right">2</span>Link</a></li>
									<li><a href="#"><span class="badge pull-right">0</span>Link</a></li>
									<li><a href="#"><span class="label label-info pull-right">1</span>Link</a></li>
									<li><a href="#"><span class="badge pull-right">13</span>Link</a></li>
								</ul>
							</li>
							<li><a href="#" id="btnToggle"><i class="glyphicon glyphicon-th-large"></i></a></li>
							<li><a href="#"><i class="glyphicon glyphicon-user"></i></a></li>
						</ul>
					</div>	
				</div>	
			</div>
		@show

		@section('subheader')
			<div class="navbar navbar-default" id="subnav">
				<div class="col-md-12">
					<div class="navbar-header">
						<a href="#" style="margin-left:15px;" class="navbar-btn btn btn-default btn-plus dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-home" style="color:#dd1111;"></i> Home <small><i class="glyphicon glyphicon-chevron-down"></i></small></a>
						<ul class="nav dropdown-menu">
							<li><a href="#"><i class="glyphicon glyphicon-user" style="color:#1111dd;"></i> Profile</a></li>
							<li><a href="#"><i class="glyphicon glyphicon-dashboard" style="color:#0000aa;"></i> Dashboard</a></li>
							<li><a href="#"><i class="glyphicon glyphicon-inbox" style="color:#11dd11;"></i> Pages</a></li>
							<li class="nav-divider"></li>
							<li><a href="#"><i class="glyphicon glyphicon-cog" style="color:#dd1111;"></i> Settings</a></li>
							<li><a href="#"><i class="glyphicon glyphicon-plus"></i> More..</a></li>
						</ul>
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse2">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="navbar-collapse2">
						<ul class="nav navbar-nav navbar-right">
							<li class="active"><a href="#">Posts</a></li>
							<li><a href="#loginModal" role="button" data-toggle="modal">Login</a></li>
							<li><a href="#aboutModal" role="button" data-toggle="modal">About</a></li>
						</ul>
					</div>	
				</div>	
			</div>
		@show

		

		<!--main-->
		<div class="container" id="main">
			<div class="row">
				@yield('content')
			</div><!--/main row-->
		</div><!--/main-->


		<!--footer-->
		@section('footer')
			<br>
			<div class="clearfix"></div>
			<hr>
			<div class="col-md-12 text-center">
				<p><a href="http://www.bootply.com/download/90113" target="_ext">Download Google Plus Style Template</a><br>
					<a href="http://bootply.com/templates" target="_ext">More Bootstrap Templates by @Bootply</a>
				</p>
			</div>
			<hr>
		@show


		<!--login modal-->
		<div id="loginModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h2 class="text-center"><img src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=100" class="img-circle"><br>Login</h2>
					</div>
					<div class="modal-body">
						<form class="form col-md-12 center-block">
							<div class="form-group">
								<input type="text" class="form-control input-lg" placeholder="Email">
							</div>
							<div class="form-group">
								<input type="password" class="form-control input-lg" placeholder="Password">
							</div>
							<div class="form-group">
								<button class="btn btn-primary btn-lg btn-block">Sign In</button>
								<span class="pull-right"><a href="#">Register</a></span><span><a href="#">Need help?</a></span>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<div class="col-md-12">
							<button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
						</div>	
					</div>
				</div>
			</div>
		</div>


		<!--about modal-->
		<div id="aboutModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h2 class="text-center">About</h2>
					</div>
					<div class="modal-body">
						<div class="col-md-12 text-center">
							<a href="http://bootply.com/90113">This Bootstrap Template</a><br>was made with <i class="glyphicon glyphicon-heart"></i> by <a href="http://bootply.com/templates">Bootply</a>
							<br><br>
							<a href="https://github.com/iatek/bootstrap-google-plus">GitHub Fork</a>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn" data-dismiss="modal" aria-hidden="true">OK</button>
					</div>
				</div>
			</div>
		</div>

        <script type="text/javascript" src="{{ asset('js/bundle.js') }}"></script>
        
	</body>
</html>