function choiseMassage(){
  if($('#man').attr('checked')){
    $('#man-list').css({'display':'flex'});
  }else if($('#woman').attr('checked')){
    $('#woman-list').css({'display':'flex'});
  }
}

$(document).on('change', '.massage__choise-input', function (e) {
  const $this = $(e.currentTarget);
  $('.form__massage-list').css({'display':'none'})
  $('.massage__choise-input').removeAttr('checked');
	if ($('input[name="worker"]:checked').val()) {
		$this.attr('checked', true);
    //$this.removeAttr('checked');
	}else{
    $this.attr('checked', true);
  }
  choiseMassage();
})


