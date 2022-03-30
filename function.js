$(document).ready(function() {
    $("[data-orgin-color]").click(function (){
        $this=$(this);
       $color=$(this).data("orgin-color");
       $add_color=$(this).data("click-color");
       if ($add_color!= undefined && $add_color!="" && $color!= undefined && $color!=""){
           $(this).css("background",$add_color);
           setTimeout(function (){
               $this.css("background",$color);
           },100);
       }
    });
    $height=$(window).height();
    $nav_height=$(".navbar-default").height();
    $total_values=$("#total_values").height();
    $submit_cart=$("#submit_cart").height();
    $div_note=0;
    if ($("#divnote").length>0){
        $div_note=$("#divnote").height()+20;
    }
    $scrol_height=$height-($nav_height+48 + $submit_cart+22+30+$div_note);
    $(".item-cart").slimScroll({
    height: $scrol_height + 'px'
});
     
    $current_index = 1;
    $(".add-to-cart").click(function() {


        $uid = $(this).data("id");
        if ($uid !== undefined && $uid != "") {
            $.ajax({url: "ajax_get_pro_to_cart.php", data: {uid: $uid}, type: "post", dataType: "json",
                success: function(data) {
                    if (data.status === "success") {

                        $("#add_to_cart_modal .modal-body").html(data.html);
                        $("#add_to_cart_modal").modal();
                        $current_index = $(".hidden.array_units").attr("data-default-index");

                        if ($current_index === undefined || $current_index === "") {
                            $current_index = 1;
                        } else {
                            $current_index = parseInt($current_index);
                        }

                        $(".current-unit-txt").val($(".array_units li[data-index='" + $current_index + "']").text());
                        $("#price_pro_modal").text($(".array_units li[data-index='" + $current_index + "']").attr("data-price"));

                    }
                }});

        }
    });

    $("body").on("click", ".minus-qty", function() {
        $qty = $(".qty-pro").val();
        if ($qty !== "" && $qty !== undefined) {
            $qty = parseInt($qty);
        } else {
            $qty = 1;
        }
        $new_qty = $qty - 1;
        if ($new_qty < 1) {
            $new_qty = 1;
        }
        $(".qty-pro").val($new_qty);
    });
    $("body").on("click", ".plus-qty", function() {


        $qty = $(".qty-pro").val();
        if ($qty !== "" && $qty !== undefined) {
            $qty = parseInt($qty);
        } else {
            $qty = 1;
        }

        $new_qty = $qty + 1;

        $(".qty-pro").val($new_qty);
    });
    $(".evnt-add-to-cart-single").click(function() {
        $uid = $(this).data("id");
        $default_unit = $(this).data("default-unit");
        if ($default_unit === undefined || $default_unit === "") {
            $default_unit = 0;
        }
        $default_unit = parseInt($default_unit);
        if ($default_unit > 0) {
            $default_unit++;
        }
        if ($uid !== undefined && $uid !== "") {
            $.ajax({url: "ajax_add_to_cart.php", data: {uid: $uid, single: "true", unit: $default_unit}, type: "post", dataType: "json",
                success: function(data) {
                    if (data.status === "success") {

                        $("#add_to_cart_modal .modal-body").html("");
                        $("#add_to_cart_modal").modal("hide");
                        $(".notification").text(data.total_cart);
                        $("#ext-script").remove();
                        $("body").append(data.script);
                    }
                }});

        }

    })
    $("body").on("click", ".evnt-add-to-cart", function() {
        $uid = $(this).data("id");
        $qty = $(".qty-pro").val();
        $notes = $(".notes_pro").val();
        if ($qty !== "" && $qty !== undefined) {
            $qty = parseInt($qty);
        } else {
            $qty = 1;
        }
        if ($notes === undefined) {
            $notes = "";
        }
        $unit = $(".hidden.array_units li[data-index='" + $current_index + "']").data("unit");
        if ($unit === undefined || $unit === "") {
            $unit = 0;
        }
        $unit = parseInt($unit);
        if ($unit > 0) {
            $unit++;
        }

        if ($uid !== undefined && $uid !== "") {
            $.ajax({url: "ajax_add_to_cart.php", data: {uid: $uid, qty: $qty, notes: $notes, unit: $unit}, type: "post", dataType: "json",
                success: function(data) {
                    if (data.status === "success") {

                        $("#add_to_cart_modal .modal-body").html("");
                        $("#add_to_cart_modal").modal("hide");
                        $(".notification").text(data.total_cart);
                        $("#ext-script").remove();
                        $("body").append(data.script);
                    }
                }});

        }
    });
    $("body").on("click", ".remove_from_cart", function() {
        $uid = $(this).data("id");
        
        $price = $(this).data("price");

        if ($price !== undefined && $price != "") {
            $price = parseFloat($price);
        }
        else {
            $price = 0;
        }
        $total_price = $("#total_price").text();
        if ($total_price !== undefined && $total_price != "") {
            $total_price = parseFloat($total_price);
        }
        else {
            $total_price = 0;
        }
        $new_total_price = $total_price - $price;

        if ($uid !== undefined && $uid != "") {
            $.ajax({url: "remove_from_cart.php", data: {uid: $uid},async:false, type: "post", dataType: "json",
                success: function(data) {
                    
                    if (data.status === "success") {
                        
                        $(".cart-i[data-id='" + $uid + "']").fadeOut();
                        $("#total_price").text($new_total_price);
                        $("#total_qty").text(data.new_qty);
                        $("#ext-script").remove();
                        $("body").append(data.script);
                    }
                }});

        }

    });
    $(window).resize(function() {

        resize_aj();

    })

    resize_aj();

    function resize_aj() {

    }

    $("body").on("click", ".change-unit", function() {
        $opt = $(this).attr("data-opt");
        $units_length = $(".array_units li").length;
        if ($opt !== undefined && $opt !== "" && $units_length > 1) {

            if ($opt === "next") {
                if ($current_index + 1 > $units_length) {
                    $current_index = 1;
                } else {
                    $current_index++;
                }
            } else {
                if ($current_index - 1 < 1) {
                    $current_index = $units_length;
                } else {
                    $current_index--;
                }
            }

            $(".current-unit-txt").val($(".array_units li[data-index='" + $current_index + "']").text());
            $("#price_pro_modal").text($(".array_units li[data-index='" + $current_index + "']").attr("data-price"));
        }
    });


    $("body").on("click", ".minus-cart", function() {

        $id = $(this).data("id");
        $unit = $(this).data("unit");
        if ($id !== undefined && $id !== '' && $unit !== undefined && $unit !== '') {
            $qty = $(".qty-pro[data-id='" + $id + "'][data-unit='" + $unit + "']").val();
            if ($qty !== "" && $qty !== undefined) {
                $qty = parseInt($qty);
            } else {
                $qty = 1;
            }
            $new_qty = $qty - 1;
            if ($new_qty < 1) {
                $new_qty = 1;
            }
            $(".qty-pro[data-id='" + $id + "'][data-unit='" + $unit + "']").val($new_qty).trigger("change");
        }
    });
    $("body").on("click", ".plus-cart", function() {

        $id = $(this).data("id");
        $unit = $(this).data("unit");
        if ($id !== undefined && $id !== '' && $unit !== undefined && $unit !== '') {
            $qty = $(".qty-pro[data-id='" + $id + "'][data-unit='" + $unit + "']").val();
            if ($qty !== "" && $qty !== undefined) {
                $qty = parseInt($qty);
            } else {
                $qty = 1;
            }

            $new_qty = $qty + 1;

            $(".qty-pro[data-id='" + $id + "'][data-unit='" + $unit + "']").val($new_qty).trigger("change");

        }
    });


    $(".qty-pro[data-id][data-unit]").change(function() {
        $id = $(this).data("id");
        $unit = $(this).data("unit");
        $price = $(this).data("price");
        $old_qty = $(this).data("old-qty");
        $qty = $(this).val();
        if ($id !== undefined && $id !== '' && $unit !== undefined && $unit !== '' && $qty !== '') {
            $.ajax({url: "change_qty_cart.php", type: "post", dataType: "json", data: {
                    id: $id, unit: $unit, qty: $qty, price: $price, old_qty: $old_qty
                }, success: function(data) {
                    if (data.success === true) {
                        $cuurent_total_price = parseFloat($("#total_price").text());
                        $current_total_qty = parseInt($("#total_qty").text());
                        $current_total_price_pro = parseFloat($(".t-price[data-id='" + $id + "'][data-unit='" + $unit + "']").text());

                        $new_total_price = parseFloat(data.total_price);
                        $new_total_qty = parseInt(data.total_qty);
                        $new_price = parseFloat(data.new_price);

                        $("#total_price").text($cuurent_total_price + $new_total_price);
                        $("#total_qty").text($current_total_qty + $new_total_qty);
                        $(".t-price[data-id='" + $id + "'][data-unit='" + $unit + "']").text($new_price);
                        $(".qty-pro[data-id='" + $id + "'][data-unit='" + $unit + "']").data("old-qty", $qty);
                        $("body").append(data.script);

                    }
                }})

        }

    });
});