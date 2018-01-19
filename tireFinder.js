$(document).ready(function() {
    $.getJSON("data-json.json", function(e) {
        var a = [],
            t = [],
            o = [],
            d = [];
        $.each(e, function(e, i) {
            var s = "http://www.sodimac.cl/sodimac-cl/search/?Ntt=Neumaticos+aro+" + i.MEDIDA_RW + "&" + i.MARCA_AUTO + "&" + i.MODELO_AUTO + "&" + i.DATE_AUTO + "&Date",
                n = "http://www.sodimac.cl/sodimac-cl/search/?Ntt=Neumaticos+aro+" + i.MEDIDA_RW + "&" + i.MARCA_AUTO + "&" + i.MODELO_AUTO + "&" + i.MEDIDA_RW + "&MRW";
            a.push('<option class="unique"  value="' + i.MARCA_AUTO + '" >' + i.MARCA_AUTO + "</option>"),
            t.push('<option class="unique"  value="' + i.MODELO_AUTO + '" data-marca="' + i.MARCA_AUTO + '" data-medida="' + i.MEDIDA_RW + '" >' + i.MODELO_AUTO + " </option>"),
            o.push('<option class="unique2"  value="' + i.DATE_AUTO + '" data-medida="' + i.MEDIDA_RW + '"data-Link="' + s + '"  data-modelo="' + i.MODELO_AUTO + '" >' + i.DATE_AUTO + "</option>"),
            d.push('<option class="unique2"  value="' + i.DATE_AUTO + '" data-medida="' + i.MEDIDA_RW + '"data-Link="' + n + '"  data-modelo="' + i.MODELO_AUTO + '" >' + i.MEDIDA_RW + "</option>")
        });
        var i = "<option class='unique'>Busca por marca...</option>";
        $("#marca").html(i + a.sort().join("")), $("#baseNamesModelos").html(t.join("")), $("#baseDate").html(o.join("")), $("#baseMedidaRW").html(d.join("")), $("#marca").change(function() {
            $("#labelMod").removeClass("textGrey"), $("#modelo").removeAttr("disabled"), $("#asignedDate").attr("disabled", "disabled"), $("#labelMed").addClass("textGrey"), $("#modelo").empty(), $("#baseNamesModelos").clone().appendTo("#modelo").attr("id", "namesModelo"), $("#namesModelo").addClass("DropDown_Modelo");
            var e = $(this).find("option:selected").val();
            "Busca por marca..." !== e ? $("#namesModelo option").each(function() {
                var a = $(this).attr("data-marca");
                a.indexOf(e) < 0 && $(this).detach()
            }) : ($("#asignedDate").html("<option >A&ntildeos</option>"), $("#namesModelo").html("<option >Modelos</option>"), $("#labelMod").addClass("textGrey"), $("#labelMed").addClass("textGrey"), $("#asignedDate").prop("disabled", !0), $("#namesModelo").prop("disabled", !0)), $("#namesModelo").prepend('<option value="buscarModelo">Busca por modelo...</option>'), $("#namesModelo > option:eq(0)").attr("selected", "selected")
        }), $("#modelo").change(function() {
            $("#labelMed").removeClass("textGrey"), $("#asignedDate ").removeAttr("disabled"), $("#date").empty(), $("#labelMedRW").removeClass("textGrey"), $("#asignedMedidaRW").removeAttr("disabled"), $("#medidaRW").empty(), $("#baseDate").clone().appendTo("#date").attr("id", "asignedDate"), $("#asignedDate").addClass("DropDown_Modelo"), $("#baseMedidaRW").clone().appendTo("#medidaRW").attr("id", "asignedMedidaRW"), $("#asignedMedidaRW").addClass("DropDown_Modelo");
            var e = $(this).find("option:selected").val();
            $("#asignedDate option").each(function() {
                var a = $(this).attr("data-modelo");
                a.indexOf(e) < 0 && $(this).detach()
            }), $("#asignedMedidaRW option").each(function() {
                var a = $(this).attr("data-modelo");
                a.indexOf(e) < 0 && $(this).detach()
            }), $("#asignedDate").change(function() {
                location.href = $(this).find(":selected").attr("data-Link")
            }), $("#asignedMedidaRW").change(function() {
                location.href = $(this).find(":selected").attr("data-Link")
            }), $("#asignedDate").prepend(' <option value="date" >Busca por el a\u00F1o...</option>'), $("#asignedDate > option:eq(0)").attr("selected", "selected"), $("#asignedMedidaRW").prepend(' <option value="tires" >Busca por medida de neum\u00E1tico...</option>'), $("#asignedMedidaRW > option:eq(0)").attr("selected", "selected");
            var a = {};
            $("#asignedDate .unique2").bind().each(function() {
                a[this.text] ? $(this).remove() : a[this.text] = this.value
            }), $("#asignedMedidaRW .unique2").bind().each(function() {
                a[this.text] ? $(this).remove() : a[this.text] = this.value
            })
        });
        var s = {};
        $(".unique").bind().each(function() {
            s[this.text] ? $(this).remove() : s[this.text] = this.value
        });
        var n = {};
        $("#asignedDate .unique2").bind().each(function() {
            n[this.text] ? $(this).remove() : n[this.text] = this.value
        }), $("#asignedMedidaRW .unique2").bind().each(function() {
            n[this.text] ? $(this).remove() : n[this.text] = this.value
        })
    })
}), $(window).load(function() {
    $("#cargador").hide()
}), $("#searchCars").click(function() {
    $("#grupoDate").show(), $("#grupoMedidaRW").hide(), $("#namesModelo").empty(), $("#asignedDate").empty(), $("#labelMod").addClass("textGrey"), $("#labelMed").addClass("textGrey"), $("#asignedDate").prop("disabled", !0), $("#namesModelo").prop("disabled", !0), $("#namesModelo").prepend(' <option value="buscarModelo" >Busca tu modelo...</option>'), $("#namesModelo > option:eq(0)").attr("selected", "selected"), $("#asignedDate").prepend(' <option value="date" >Busca por el a\u00F1o...</option>'), $("#asignedDate > option:eq(0)").attr("selected", "selected"), $("#marca").get(0).selectedIndex = 0, $("#searchCars").addClass("activeSearchTires"), $("#searchTires").removeClass("activeSearchTires"), $(".whiteBlockTire").hide(), $(".whiteBlockCar").show()
}), $("#searchTires").click(function() {
    $("#grupoDate").hide(), $("#grupoMedidaRW").show(), $("#namesModelo").empty(), $("#labelMod").addClass("textGrey"), $("#labelMedRW").addClass("textGrey"), $("#asignedMedidaRW").prop("disabled", !0), $("#namesModelo").prop("disabled", !0), $("#namesModelo").prepend(' <option value="hey" >Busca tu modelo...</option>'), $("#namesModelo > option:eq(0)").attr("selected", "selected"), $("#asignedMedidaRW").prepend(' <option value="tires" >Busca por medida de neum\u00E1tico...</option>'), $("#asignedMedidaRW > option:eq(0)").attr("selected", "selected"), $("#marca").get(0).selectedIndex = 0, $("#searchTires").addClass("activeSearchTires"), $("#searchCars").removeClass("activeSearchTires"), $(".whiteBlockCar").hide(), $(".whiteBlockTire").show()
}), $(".mobileAlerta").click(function() {
    $(".bajada-alerta").slideToggle()
});
