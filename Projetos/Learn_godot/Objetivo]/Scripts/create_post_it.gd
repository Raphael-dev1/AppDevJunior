extends Control

@onready var pit_w_input:LineEdit = $Pit_propetys/Pit_w
@onready var pit_h_input:LineEdit = $Pit_propetys/Pit_h
@onready var pit_c_input:ColorPicker = $Pit_propetys/Pit_c
@onready var pit_pos:Marker2D = $Pit_position

#@onready var pits_box:Control = $Pits
var idn = 0

var close_btn_texture = preload("res://Objetivo]/Textures/Close_btn_png.png")

@onready var close_btn_tem:TextureButton = $close_btn_tm
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(_delta: float) -> void:
	
	
	pass


func _on_create_pos_it_btn_pressed() -> void:
	var max_h = 75
	var max_w = 100
	
	
	var pit_w = int(pit_w_input.text)
	var pit_h = int(pit_h_input.text)
	var pit_c = pit_c_input.color
	
	if pit_w <= 0 or pit_h <= 0: return
	if pit_h > max_h or pit_w > max_w:return
	
	
	var new_pit:TextEdit = TextEdit.new()
	new_pit.size.x = pit_w * 10
	new_pit.size.y = pit_h * 10
	new_pit.wrap_mode = TextEdit.LINE_WRAPPING_NONE
	new_pit.add_theme_color_override("background_color",pit_c)
	new_pit.add_theme_color_override("font_color",pit_c.inverted())
	new_pit.name = str(idn)
	
	new_pit.position  = pit_pos.position + Vector2(randf_range(-10,20),0)
	
	var new_pit_cbtn:TextureButton = close_btn_tem.duplicate()
	new_pit_cbtn.position = Vector2.ZERO
	new_pit_cbtn.name = "c"+str(idn)
	
	
	print(new_pit_cbtn.position)
	new_pit.add_child(new_pit_cbtn)
	
	
	add_child(new_pit)
	idn += 1
	
	pass # Replace with function body.


func post_it_funcs(pit:TextEdit):
	
	if Input.is_action_just_pressed("dlt_post_it"):
		pit.queue_free()
	
	while Input.is_action_pressed("Jump_click"):
		pit.position = pit.position.direction_to(get_global_mouse_position()) * 20
	
