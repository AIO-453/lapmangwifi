/*!
 * Copyright 2016 Thanh Nguyen.
 * Licensed under the MIT license
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Requires jQuery')
}
var debug_show_all_query, debug_hide_all_query, validateEmail, isNumber, number_format, replace_url_param, redirect_to, get_cookie, set_cookie, delete_cookie, real_date_time, formatting_to_number, auto_format_vn_number, strim_input, validateVNPhone, validatePassword, validateName, hasNumber;
debug_show_all_query = function () {
    $(".show_all_query").show();
    $("#btn_hide_all_query").show();
    $("#btn_show_all_query").hide();
    $('html,body').animate({
        scrollTop: $(".show_all_query").offset().top
    }, 'slow');
    return null;
}
    ;
debug_hide_all_query = function () {
    $(".show_all_query").hide();
    $("#btn_hide_all_query").hide();
    $("#btn_show_all_query").show();
    return null;
}
validateEmail = function (value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}
validateName = function (value) { }
validatePassword = function (value) {
    var result, strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"), mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if (strongRegex.test(value)) {
        result = 2;
    } else if (mediumRegex.test(value)) {
        result = 1;
    } else {
        result = 0;
    }
    return result;
}
validateVNPhone = function (value) {
    var phone = value.toString(), country_code, phone_code;
    if (!isNumber) {
        return false;
    }
    if (phone.slice(0, 1) != '0') {
        return false;
    }
    if (phone.length != 10 && phone.length != 11) {
        return false;
    }
    if (phone.length == 10) {
        country_code = phone.slice(0, 3);
        phone_code = [];
        phone_code.push('086', '096', '097', '098', '032', '033', '034', '045', '046', '037', '038', '039');
        phone_code.push('089', '090', '093', '070', '079', '077', '076', '078');
        phone_code.push('088', '091', '094', '083', '084', '085', '081', '082');
        phone_code.push('092', '056', '058');
        if ($.inArray(country_code, phone_code) == -1) {
            return false;
        }
    }
    if (phone.length == 11) {
        country_code = phone.slice(0, 2);
        phone_code = ['02'];
        if ($.inArray(country_code, phone_code) == -1) {
            return false;
        }
    }
    return true;
}
hasNumber = function (value) {
    return /\d/.test(value);
}
isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
number_format = function (num, n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')'
        , num = num.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
}
    ;
replace_url_param = function (url, param_name, param_value) {
    var pattern = new RegExp('(\\?|\\&)(' + param_name + '=).*?(&|$)')
    var new_url = url
    if (url.search(pattern) >= 0) {
        new_url = url.replace(pattern, '$1$2' + param_value + '$3');
    } else {
        new_url += (new_url.indexOf('?') !== -1 ? '&' : '?') + param_name + '=' + param_value
    }
    return new_url
}
redirect_to = function (url) {
    window.location.replace(url);
}
get_cookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
set_cookie = function (cname, cvalue, time = 3600) {
    var d = new Date();
    d.setTime(d.getTime() + (time * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    return null;
}
delete_cookie = function (cname) {
    set_cookie(cname, '', -1);
    return null;
}
real_date_time = function (element_id, type) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7');
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    if (type == 'time') {
        result = '<strong>' + h + ' : ' + m + ' : ' + s + '</strong>';
    } else {
        result = '' + days[day] + ', ngày ' + d + ' ' + months[month] + ' năm ' + year + ' <strong>' + h + ':' + m + ':' + s + '</strong>';
    }
    document.getElementById(element_id).innerHTML = result;
    setTimeout('real_date_time("' + element_id + '");', '1000');
    return true;
}
$.fn.getCursorPosition = function () {
    var input = this.get(0);
    if (!input)
        return;
    if (document.selection) {
        input.focus();
    }
    return 'selectionStart' in input ? input.selectionStart : '' || Math.abs(document.selection.createRange().moveStart('character', -input.value.length));
}
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}
    ;
formatting_to_number = function (origin_value) {
    var format_value = '';
    if (origin_value) {
        origin_value = origin_value.split('.').join('');
        number_value = Number(origin_value);
        if ($.isNumeric(number_value)) {
            format_value = number_format(number_value, 0, 3, '.');
        } else {
            format_value = origin_value;
        }
    }
    return format_value;
}
auto_format_vn_number = function (input) {
    var cursor_position = $(input).getCursorPosition();
    var origin_value = $(input).val();
    var format_value = formatting_to_number(origin_value);
    $(input).val(format_value);
    if (cursor_position < origin_value.length) {
        var new_position = (origin_value.length < format_value.length) ? cursor_position + 1 : cursor_position;
        $(input).setCursorPosition(new_position);
    }
    return null;
}
strim_input = function () {
    $("input[type=text]").each(function () {
        var _self = this;
        $(this).blur(function () {
            var str = $(_self).val();
            str = $.trim(str);
            $(_self).val(str);
        });
    });
}
$(function () {
    strim_input();
});
$(document).ajaxComplete(function (event, request, settings) {
    var response = JSON.parse(request.responseText);
    CWS_TOKEN_VALUE = response.cws_token;
    $("input[name='" + CWS_TOKEN_NAME + "']").each(function () {
        $(this).val(CWS_TOKEN_VALUE);
    });
});
$(document).ajaxSend(function (event, request, settings) {
    settings.data += '&' + CWS_TOKEN_NAME + '=' + CWS_TOKEN_VALUE;
});
