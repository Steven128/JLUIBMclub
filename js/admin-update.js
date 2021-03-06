//修改社团成员信息-------提交表单
function getAdminNumber() {
    return (reason = localStorage.getItem("adminNumber"));
}
$(document).ready(function() {

    //跳转到修改社员信息的页面，并加载内容
    $(document).on("click", ".edit-img", function() {

        $("#updateMember-text-outer").remove();
        var target = $(this).val();
        var appendText = "";
        $.ajax({
            type: "GET",
            url: "../php/display.php?request=single&target-user=" + target + "&adminNumber=" + getAdminNumber(),
            dataType: "JSON",
            success: function(e) {
                var appendText = "";
                var name = e.name;
                var number = e.number;
                var college = e.college;
                var major = e.major;

                var qq = e.qq;
                var phone = e.phone;

                var subText = '<div id="updateMember-text-outer" class="text-outer col-xs-12"><div class="update-text text">';
                appendText += subText;
                var subText = "<div id='update-body'><form id='update-member' method='post' action=''><div id='update-member-subform'><div class='form-group'><div class='section__title id='name-title'>姓名</div><input id='name' type='text' class='input-text form-control' name='name' value='" + name + "' disabled /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>学号</div><input id='number' type='text' class='input-text form-control' name='number' value='" + number + "' disabled /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>学院</div><input id='college' type='text' class='input-text form-control' name='college' value='" + college + "' /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>专业</div><input id='major' type='text' class='input-text form-control' name='major' value='" + major + "' /></div>";
                appendText += subText;
                //性别
                if (e.gender == '0') {
                    var subText = "<div class='form-group'><div class='section__title'>性别</div><label class='gender'><input type='radio' id='male' class='radio-inline' name='gender' value='0' checked='checked' />男</label><label class='gender'><input type='radio' id='female' class='radio-inline' name='gender' value='1' />女</label></div>";
                } else if (e.gender == '1') {
                    var subText = "<div class='form-group'><div class='section__title'>性别</div><label class='gender'><input type='radio' id='male' class='radio-inline' name='gender' value='0' />男</label><label class='gender'><input type='radio' id='female' class='radio-inline' name='gender' value='1' checked='checked' />女</label></div>";
                }
                appendText += subText;
                //年级
                if (e.grade == '1') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1" selected="selected">大一</option><option class="option" value="2">大二</option><option class="option" value="3">大三</option><option class="option" value="4">大四</option></select></div>';
                } else if (e.grade == '2') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1">大一</option><option class="option" value="2" selected="selected">大二</option><option class="option" value="3">大三</option><option class="option" value="4">大四</option></select></div>';
                } else if (e.grade == '3') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1">大一</option><option class="option" value="2">大二</option><option class="option" value="3" selected="selected">大三</option><option class="option" value="4">大四</option></select></div>';
                } else if (e.grade == '4') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1">大一</option><option class="option" value="2">大二</option><option class="option" value="3">大三</option><option class="option" value="4"  selected="selected">大四</option></select></div>';
                }
                appendText += subText;

                var subText = "<div class='form-group'><div class='section__title'>QQ</div><input id='qq' type='text' class='input-text form-control' name='qq' value='" + qq + "' /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>手机</div><input id='phone' type='text' class='input-text form-control' name='phone' value='" + phone + "' /></div>";
                appendText += subText;

                if (e.isManager == '1') {
                    var subText = '<div class="form-group"><div class="section__title">类别</div><select id="isManager" class="select form-control" name="isManager"><option class="option" value="1" selected="selected">管理员</option><option class="option" value="0">社员</option></select></div>';
                } else {
                    var subText = '<div class="form-group"><div class="section__title">类别</div><select id="isManager" class="select form-control" name="isManager"><option class="option" value="1">管理员</option><option class="option" value="0" selected="selected">社员</option></select></div>';
                }
                appendText += subText;

                var subText = "<div class='btn-area'><button id='update-member-button' type='button' class='submit'>修改</button></div></div></form></div></div></div>"
                appendText += subText;
                $("#updateMember-tab").append(appendText);
                $("#memberList-tab").removeClass("box-active");
                $("#updateMember-tab").addClass("box-active");
                $("#menu-memberList-item").removeClass("innerActive");
                $("#menu-updateMember-item").addClass("innerActive");
            },
            error: function(err) {

            }
        });
    });


    //跳转到修改组员信息的页面，并加载内容
    $(document).on("click", ".group-edit-img", function() {
        $("#updateGrouper-text-outer").remove();
        var group = $(this).attr("id");
        var target = $(this).val();
        var appendText = "";
        $.ajax({
            type: "GET",
            url: "../php/display.php?request=single-group&target-user=" + target + "&group=" + group + "&adminNumber=" + getAdminNumber(),
            dataType: "JSON",
            success: function(e) {
                var appendText = "";
                var name = e.name;
                var number = e.number;
                var college = e.college;
                var major = e.major;
                var qq = e.qq;
                var phone = e.phone;
                var groupName = '';
                if (group == 'cpp') {
                    groupName = 'C/C++';
                } else if (group == 'algorithm') {
                    groupName = '算法';
                } else if (group == 'web') {
                    groupName = 'Web';
                } else if (group == 'linux') {
                    groupName = 'Linux';
                } else if (group == 'java') {
                    groupName = 'Java';
                }
                $("#updateGrouper-tab").find(".title").html("<h4 class=\"title-left\">修改 " + groupName + "组 组员信息</h4>");
                var subText = '<div id="updateGrouper-text-outer" class="text-outer col-xs-12"><div class="update-text text">';
                appendText += subText;
                var subText = "<div id='update-body'><form id='update-groupMember' method='post' action=''><div id='update-member-subform'><div class='form-group group'><div class='section__title'></div><input id='group' type='text' class='input-text form-control' name='group' value='" + group + "' /></div>"
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>姓名</div><input id='name' type='text' class='input-text form-control' name='name' value='" + name + "' disabled /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>学号</div><input id='number' type='text' class='input-text form-control' name='number' value='" + number + "' disabled /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>学院</div><input id='college' type='text' class='input-text form-control' name='college' value='" + college + "' /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>专业</div><input id='major' type='text' class='input-text form-control' name='major' value='" + major + "' /></div>";
                appendText += subText;
                //性别
                if (e.gender == '0') {
                    var subText = "<div class='form-group'><div class='section__title'>性别</div><label class='gender'><input type='radio' id='male' class='radio-inline' name='gender' value='0' checked='checked' />男</label><label class='gender'><input type='radio' id='female' class='radio-inline' name='gender' value='1' />女</label></div>";
                } else if (e.gender == '1') {
                    var subText = "<div class='form-group'><div class='section__title'>性别</div><label class='gender'><input type='radio' id='male' class='radio-inline' name='gender' value='0' />男</label><label class='gender'><input type='radio' id='female' class='radio-inline' name='gender' value='1' checked='checked' />女</label></div>";
                }
                appendText += subText;
                //年级
                if (e.grade == '1') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1" selected="selected">大一</option><option class="option" value="2">大二</option><option class="option" value="3">大三</option><option class="option" value="4">大四</option></select></div>';
                } else if (e.grade == '2') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1">大一</option><option class="option" value="2" selected="selected">大二</option><option class="option" value="3">大三</option><option class="option" value="4">大四</option></select></div>';
                } else if (e.grade == '3') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1">大一</option><option class="option" value="2">大二</option><option class="option" value="3" selected="selected">大三</option><option class="option" value="4">大四</option></select></div>';
                } else if (e.grade == '4') {
                    var subText = '<div class="form-group"><div class="section__title">年级</div><select id="grade" class="select form-control" name="grade"><option class="option" value="1">大一</option><option class="option" value="2">大二</option><option class="option" value="3">大三</option><option class="option" value="4"  selected="selected">大四</option></select></div>';
                }
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>QQ</div><input id='qq' type='text' class='input-text form-control' name='qq' value='" + qq + "' /></div>";
                appendText += subText;
                var subText = "<div class='form-group'><div class='section__title'>手机</div><input id='phone' type='text' class='input-text form-control' name='phone' value='" + phone + "' /></div>";
                appendText += subText;
                if (e.isLeader == '1') {
                    var subText = '<div class="form-group"><div class="section__title">类别</div><select id="isLeader" class="select form-control" name="isLeader"><option class="option" value="1" selected="selected">组长</option><option class="option" value="0">组员</option></select></div>';
                } else {
                    var subText = '<div class="form-group"><div class="section__title">类别</div><select id="isLeader" class="select form-control" name="isLeader"><option class="option" value="1">组长</option><option class="option" value="0" selected="selected">组员</option></select></div>';
                }
                appendText += subText;
                var subText = "<div class='btn-area'><button id='update-group-button' type='button' class='submit'>修改</button></div></div></form></div></div></div>"
                appendText += subText;
                $("#updateGrouper-tab").append(appendText);
                $("#" + group + "List-tab").removeClass("box-active");
                $("#updateGrouper-tab").addClass("box-active");
                $("#menu-" + group + "List-item").removeClass("innerActive");
                $("#menu-updateGrouper-item").addClass("innerActive");
            },
            error: function(err) {

            }
        });
    });

    $(document).on("click", "#update-member-button", function() {
        window.wxc.xcConfirm("确认要修改吗？", window.wxc.xcConfirm.typeEnum.confirm, {
            onOk: function(v) {
                var name = $("#name").val();
                var number = $("#number").val();
                var college = $("#college").val();
                var major = $("#major").val();
                var gender = $("input[name='gender']:checked").val();
                var grade = $("#grade").val();
                var qq = $("#qq").val();
                var phone = $("#phone").val();
                var isManager = $("#isManager").val();
                $.ajax({
                    type: "POST",
                    url: "../php/admin-update.php",
                    dataType: "JSON",
                    data: {
                        "request": "update-member",
                        "number": number,
                        "name": name,
                        "college": college,
                        "major": major,
                        "gender": gender,
                        "grade": grade,
                        "qq": qq,
                        "phone": phone,
                        "isManager": isManager,
                        "adminNumber": getAdminNumber()
                    },
                    success: function(e) {
                        if (e.message == "success") {
                            localStorage.setItem("reason", "update");
                            window.wxc.xcConfirm("修改成功！", window.wxc.xcConfirm.typeEnum.success, {
                                onOk: function() {
                                    window.location.href = "../admin/?back=memberList";
                                },
                                onClose: function() {
                                    window.location.href = "../admin/?back=memberList";
                                }
                            });
                        } else if (e.message == "wrong") {
                            window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                            console.log(e);
                        }
                    },
                    error: function(err) {
                        console.log(err);
                        window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                    }
                });
            },
            onClose: function() {

            },
            onCancel: function() {

            }
        });

    });

    $(document).on("click", "#update-group-button", function() {
        window.wxc.xcConfirm("确认要修改吗？", window.wxc.xcConfirm.typeEnum.confirm, {
            onOk: function() {
                var group = $("#group").val();
                var name = $("#name").val();
                var number = $("#number").val();
                var college = $("#college").val();
                var major = $("#major").val();
                var gender = $("input[name='gender']:checked").val();
                var grade = $("#grade").val();
                var qq = $("#qq").val();
                var phone = $("#phone").val();
                var isLeader = $("#isLeader").val();
                $.ajax({
                    type: "POST",
                    url: "../php/admin-update.php",
                    dataType: "JSON",
                    data: {
                        "request": "update-group-member",
                        "number": number,
                        "name": name,
                        "college": college,
                        "major": major,
                        "gender": gender,
                        "grade": grade,
                        "qq": qq,
                        "phone": phone,
                        "group": group,
                        "isLeader": isLeader,
                        "adminNumber": getAdminNumber()
                    },
                    success: function(e) {
                        if (e.message == "success") {
                            localStorage.setItem("reason", "update");
                            window.wxc.xcConfirm("修改成功！", window.wxc.xcConfirm.typeEnum.success, {
                                onOk: function() {
                                    window.location.href = "../admin/?back=" + group + "List";
                                },
                                onClose: function() {
                                    window.location.href = "../admin/?back=" + group + "List";
                                }
                            });
                        } else {
                            window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                        }
                    },
                    error: function(err) {
                        window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                    }
                })
            },
            onClose: function() {

            },
            onCancel: function() {

            }
        });

    });

});

//删除社员
$(document).on("click", ".delete-member", function() {
    var number = $(this).val()
    window.wxc.xcConfirm("确定要删除学号为" + number + "的社员吗？", window.wxc.xcConfirm.typeEnum.confirm, {
        onOk: function() {
            $.ajax({
                type: "POST",
                url: "../php/admin-update.php",
                dataType: "JSON",
                data: {
                    "request": "delete-member",
                    "number": number,
                    "adminNumber": getAdminNumber()
                },
                success: function(e) {
                    if (e.message == "success") {
                        localStorage.setItem("reason", "update");
                        window.wxc.xcConfirm("删除成功！", window.wxc.xcConfirm.typeEnum.success, {
                            onOk: function() {
                                window.location.href = "../admin/?back=memberList";
                            },
                            onClose: function() {
                                window.location.href = "../admin/?back=memberList";
                            }
                        });
                    } else {
                        window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                    }
                },
                error: function(err) {
                    window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                }
            });
        },
        onClose: function() {

        },
        onCancel: function() {

        }
    })
});

//删除组员
$(document).on("click", ".delete-grouper", function() {
    var group = $(this).attr("id");
    var number = $(this).val()
    var groupName;
    if (group == 'cpp') {
        groupName = 'C/C++组'
    } else if (group == 'algorithm') {
        groupName = '算法组'
    } else if (group == 'web') {
        groupName = 'Web组'
    } else if (group == 'linux') {
        groupName = 'Linux组'
    } else if (group == 'java') {
        groupName = 'Java组'
    }
    console.log(group)
    window.wxc.xcConfirm("确定要删除 " + groupName + " 学号为 " + number + " 的组员吗？", window.wxc.xcConfirm.typeEnum.confirm, {
        onOk: function() {
            $.ajax({
                type: "POST",
                url: "../php/admin-update.php",
                dataType: "JSON",
                data: {
                    "request": "delete-group-member",
                    "group": group,
                    "number": number,
                    "adminNumber": getAdminNumber()
                },
                success: function(e) {
                    if (e.message == "success") {
                        localStorage.setItem("reason", "update");
                        window.wxc.xcConfirm("删除成功！", window.wxc.xcConfirm.typeEnum.success, {
                            onOk: function() {
                                window.location.href = "../admin/?back=" + group + "List";
                            },
                            onClose: function() {
                                window.location.href = "../admin/?back=" + group + "List";
                            }
                        });
                    } else {
                        window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                    }
                },
                error: function(err) {
                    window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                }
            });
        },
        onClose: function() {

        },
        onCancel: function() {

        }
    })
});

//添加组员 
$(document).on("click", ".addBtn", function() {
    var group = $(this).val();
    $(".shelter").css("display", "block");
    var appendText = '<input id="addGroup" type="text" class="input-text form-control" name="group" value="' + group + '" style="display: none;" />';
    $(".main-bar").append(appendText);
    $(".add-box").css("display", "block");
});

$(document).on("click", ".shelter", function() {
    $(".add-box").css("display", "none");
});
$(document).on("click", "#add-group-member", function() {
    var group = $("#addGroup").val();
    var number = $("#addNumber").val();
    if (number == "") {
        window.wxc.xcConfirm("请填写学号！", window.wxc.xcConfirm.typeEnum.error);
    } else {
        window.wxc.xcConfirm("确认要添加吗？", window.wxc.xcConfirm.typeEnum.confirm, {
            onOk: function() {
                $.ajax({
                    type: "POST",
                    url: "../php/admin-update.php",
                    dataType: "JSON",
                    data: {
                        "request": "add-group-member",
                        "group": group,
                        "number": number,
                        "adminNumber": getAdminNumber()
                    },
                    success: function(e) {
                        if (e.message == "success") {
                            localStorage.setItem("reason", "update");
                            window.wxc.xcConfirm("添加成功！", window.wxc.xcConfirm.typeEnum.success, {
                                onOk: function() {
                                    window.location.href = "../admin/?back=" + group + "List";
                                },
                                onClose: function() {
                                    window.location.href = "../admin/?back=" + group + "List";
                                }
                            });
                        } else if (e.message == "does_not_exist") {
                            window.wxc.xcConfirm("社团中没有该成员", window.wxc.xcConfirm.typeEnum.error);
                        } else if (e.message == "already_in") {
                            window.wxc.xcConfirm("该成员已加入该组！", window.wxc.xcConfirm.typeEnum.warning);
                        } else if (e.message == "error") {
                            window.wxc.xcConfirm("出错啦！", window.wxc.xcConfirm.typeEnum.error);
                        }
                    },
                    error: function(err) {}
                });
            }
        });
    }
});