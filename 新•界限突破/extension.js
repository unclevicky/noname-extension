game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新•界限突破",content:function (config,pack){
    if(config.caocao){
		lib.arenaReady.push(function(){
            if(lib.character.re_caocao){
                lib.character.re_caocao[3]=['hujia','new_rejianxiong'];
            }
            if(lib.character.caocao){
                lib.character.caocao[3]=['hujia','jianxiong'];
            }
        })
    }
    if(config.guojia){
		lib.arenaReady.push(function(){
            if(lib.character.re_guojia){
                lib.character.re_guojia[3]=['tiandu','new_reyiji'];
            }
        })
    }
    if(config.sunluyu){
		lib.arenaReady.push(function(){
            if(lib.character.sunluyu){
                lib.character.sunluyu[3]=['new_meibu','new_mumu'];
            }
        })
    }
    if(config.zhangliao){
		lib.arenaReady.push(function(){
            if(lib.character.re_zhangliao){
                lib.character.re_zhangliao[3]=['new_retuxi'];
            }
        })
    }
    if(config.xuzhu){
		lib.arenaReady.push(function(){
            if(lib.character.re_xuzhu){
                lib.character.re_xuzhu[3]=['new_reluoyi'];
            }
        })
    }
    if(config.xiahoudun){
		lib.arenaReady.push(function(){
            if(lib.character.re_xiahoudun){
                lib.character.re_xiahoudun[3]=['reganglie','new_qingjian'];
            }
        })
    }
    if(config.zhenji){
		lib.arenaReady.push(function(){
            if(lib.character.zhenji){
                lib.character.zhenji[3]=['luoshen','qingguo'];
            }
        })
    }
    if(config.guanyu){
		lib.arenaReady.push(function(){
            if(lib.character.re_guanyu){
                lib.character.re_guanyu[3]=['new_rewusheng','new_yijue'];
            }
            if(lib.character.guansuo){
                lib.character.guansuo[3]=['new_zhengnan','xiefang'];
            }
        })
    }
    if(config.zhangfei){
		lib.arenaReady.push(function(){
            if(lib.character.re_zhangfei){
                lib.character.re_zhangfei[3]=['new_repaoxiao','new_tishen'];
            }
            if(lib.character.xiahouba){
                lib.character.xiahouba[3]=['new_baobian'];
            }
        })
    }
    if(config.guanzhang){
		lib.arenaReady.push(function(){
            if(lib.character.guanzhang){
                lib.character.guanzhang[3]=['new_fuhun'];
            }
        })
    }
    if(config.zhaoyun){
		lib.arenaReady.push(function(){
            if(lib.character.re_zhaoyun){
                lib.character.re_zhaoyun[3]=['longdan','new_yajiao'];
            }
        })
    }
    if(config.zhugeliang){
		lib.arenaReady.push(function(){
            if(lib.character.zhugeliang){
                lib.character.zhugeliang[3]=['guanxing','kongcheng'];
            }
            if(lib.character.jiangwei){
                lib.character.jiangwei[3]=['tiaoxin','new_zhiji'];
            }
        })
    }
    if(config.huangyueying){
		lib.arenaReady.push(function(){
            if(lib.character.huangyueying){
                lib.character.huangyueying[3]=['jizhi','qicai'];
            }
            if(lib.character.jsp_huangyueying){
                lib.character.jsp_huangyueying[3]=['jiqiao','new_linglong'];
            }
            if(lib.skill.drlt_jueyan){
                lib.skill.drlt_jueyan.content=function (){
        'step 0'
        var list=['武器','防具','坐骑','宝物'];
        for(var i=0;i<player.storage.lose_pos_equip.length;i++){
            if(get.translation(player.storage.lose_pos_equip[i])=='防御马'||get.translation(player.storage.lose_pos_equip[i])=='攻击马'){
                list.remove('坐骑');
            }else{
                list.remove(get.translation(player.storage.lose_pos_equip[i]));
            };
        };
        var list1=['equip1','equip2','equip3','equip4','equip5'];
        for(var i=0;i<player.storage.lose_pos_equip.length;i++){
            list1.remove(player.storage.lose_pos_equip[i]);
        };
        player.chooseControl(list).set('ai',function(event){
            if(list1.contains('equip1')&&player.countCards('h',{name:'sha'})>2) return '武器';
            if(list1.contains('equip2')&&player.get('e','2')!=undefined) return '防具';
            if(list1.contains('equip5')&&player.countCards('h',{type:'trick'})>=1) return '宝物';
        }).set('prompt','请选择需要废除的栏位');
        'step 1'
        if(result.control=='武器'){
            player.addTempSkill('drlt_jueyan1',{player:'phaseAfter'});
            player.lose_pos_equip('equip1');
        };
        if(result.control=='防具'){
            player.lose_pos_equip('equip2');
            player.draw(3);
            player.addTempSkill('drlt_jueyan3',{player:'phaseAfter'});
        };
        if(result.control=='坐骑'){
            player.addTempSkill('drlt_jueyan2',{player:'phaseAfter'});
            player.lose_pos_equip('equip3');
            player.lose_pos_equip('equip4');
        };
        if(result.control=='宝物'){
            player.addTempSkill('new_rejizhi',{player:'phaseAfter'});
            player.lose_pos_equip('equip5');
        };
    };
            }
        })
    }
    if(config.sunquan){
		lib.arenaReady.push(function(){
            if(lib.character.sunquan){
                lib.character.sunquan[3]=['zhiheng','jiuyuan'];
            }
        })
    }
    if(config.sunshangxiang){
		lib.arenaReady.push(function(){
            if(lib.character.sunshangxiang){
                lib.character.sunshangxiang[3]=['xiaoji','jieyin'];
            }
        })
    }
    if(config.diaochan){
		lib.arenaReady.push(function(){
            if(lib.character.diaochan){
                lib.character.diaochan[3]=['lijian','biyue'];
            }
            if(lib.character.sp_diaochan){
                lib.character.sp_diaochan[3]=['lihun','new_rebiyue'];
            }
        })
    }
    if(config.lvbu){
		lib.arenaReady.push(function(){
            if(lib.character.re_lvbu){
                lib.character.re_lvbu[3]=['wushuang','new_liyu'];
            }
        })
    }
    if(config.huatuo){
		lib.arenaReady.push(function(){
            if(lib.character.re_huatuo){
                lib.character.re_huatuo[3]=['jijiu','new_reqingnang'];
            }
        })
    }
    if(config.daxiaoqiao){
		lib.arenaReady.push(function(){
            if(lib.character.daxiaoqiao){
                lib.character.daxiaoqiao[3]=['new_xingwu','new_luoyan'];
            }
        })
    }
    if(config.shen_simayi){
    if(lib.skill.jilue){
    lib.skill.jilue={
				unique:true,
				group:['jilue_guicai','jilue_fangzhu','jilue_wansha','jilue_zhiheng','jilue_jizhi','jilue_zhiheng_draw','jilue_jizhi_clear'],
			};
			lib.translate.jilue_info='一名角色的判定牌生效前，若你有牌，你可以弃1枚“忍”标记并发动〖鬼才〗(界)；当你受到伤害后，你可以弃1枚“忍”标记并发动〖放逐〗；当你使用非转化的非延时锦囊牌时，你可以弃1枚“忍”标记并发动〖集智〗(界)；出牌阶段限一次，若你有牌，你可以弃1枚“忍”标记并发动〖制衡〗(界)；出牌阶段，你可以弃1枚“忍”标记，并获得技能〖完杀〗直到回合结束。';
    }
    if(lib.skill.jilue_guicai){
    lib.skill.jilue_guicai={
				audio:true,
				trigger:{global:'judge'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&player.storage.renjie>0;
				},
				content:function(){
					"step 0"
					player.chooseCard('是否弃置一枚“忍”，并发动【鬼才】？','he').ai=function(card){
						var trigger=_status.event.parent._trigger;
						var player=_status.event.player;
						var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result-get.value(card)/2;
						}
						else{
							return -result-get.value(card)/2;
						}
					};
					"step 1"
					if(result.bool){
						player.respond(result.cards,'highlight');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.logSkill('jilue_guicai');
						player.storage.renjie--;
						player.updateMarks();
						if(trigger.player.judging[0].clone){
							trigger.player.judging[0].clone.delete();
							game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
						}
						trigger.player.judging[0].discard();
						trigger.player.judging[0]=result.cards[0];
						trigger.position.appendChild(result.cards[0]);
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
						game.delay(2);
					}
				},
				ai:{
					tag:{
						rejudge:1,
					}
				}
			};
    }
    if(lib.skill.jilue_zhiheng){
    lib.skill.jilue_zhiheng={
    prompt:'弃置一枚“忍”，然后弃置任意张牌并摸等量的牌。若弃置了所有的手牌，则额外摸一张牌。',
    audio:true,
    enable:"phaseUse",
    usable:1,
    position:"he",
    filterCard:true,
    filter:function(card,player){
    return player.storage.renjie>0;
    },
    selectCard:[1,Infinity],
    check:function (card){
        var player=_status.event.player;
        if(get.position(card)=='h'&&!player.countCards('h',function(card){
            return get.value(card)>=8;
        })){
            return 8-get.value(card);
        }
        return 6-get.value(card)
    },
    delay:0,
    content:function (){
        'step 0'
        if(!player.hasSkill('jilue_zhiheng_delay')) game.delayx();
        'step 1'
        player.storage.renjie--;
        player.updateMarks();
        player.draw(cards.length);
    },
    subSkill:{
        draw:{
            trigger:{
                player:"loseEnd",
            },
            silent:true,
            filter:function (event,player){
                if(event.getParent(2).skill!='jilue_zhiheng') return false;
                if(player.countCards('h')) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
            content:function (){
                player.draw();
                player.addTempSkill('jilue_zhiheng_delay','jilue_zhihengAfter');
            },
            sub:true,
            forced:true,
            popup:false,
        },
        delay:{
            sub:true,
        },
    },
    ai:{
        order:1,
        result:{
            player:1,
        },
        threaten:1.55,
    },
}
    }
    if(lib.skill.jilue_jizhi){
            
            lib.skill.jilue_jizhi={
    audio:true,
    trigger:{
        player:"useCard",
    },
    filter:function (event,player){
        if(get.type(event.card)=='delay') return false;
        return (get.type(event.card,'trick')=='trick'&&event.cards[0]&&event.cards[0]==event.card&&player.storage.renjie>0);
    },
    init:function (player){
        player.storage.jilue_jizhi=0;
    },
    content:function (){
        'step 0'
        player.storage.renjie--;
        player.updateMarks();
        player.draw();
        'step 1'
        if(get.type(result[0])=='basic'){
            event.card=result[0];
            player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
                return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
            }).set('value',get.value(event.card,player));
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.discard(event.card);
            player.storage.jilue_jizhi++;
            if(_status.currentPhase==player){
                player.markSkill('jilue_jizhi');
            }
        }
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
                mod:{
                    maxHandcard:function (player,num){
            if(_status.currentPhase==player){
                return num+player.storage.jilue_jizhi;
            }
            return num;
        },
                },
                intro:{
                    content:"本回合手牌上限+#",
                },
                subSkill:{
                    clear:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                player.storage.jilue_jizhi=0;
                player.unmarkSkill('jilue_jizhi');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                }
            }
    }
    if(config.shen_zhaoyun){
        	lib.arenaReady.push(function(){
            if(lib.character.shen_zhaoyun){
                	lib.character.shen_zhaoyun[3]=['new_juejing','new_longhun'];
            }
        })
    }
    if(config.caozhang){
        	lib.arenaReady.push(function(){
            if(lib.character.caozhang){
                	lib.character.caozhang[3]=['new_jiangchi'];
            }
        })
    }
},precontent:function (){
    
},help:{},config:{"caocao":{"name":"曹操","init":true},"guojia":{"name":"郭嘉","init":true},"xiahoudun":{"name":"夏侯惇","init":true},"zhangliao":{"name":"张辽","init":true},"zhenji":{"name":"甄姬","init":true},"xuzhu":{"name":"许褚","init":true},"guanyu":{"name":"关羽／关索","init":true},"zhangfei":{"name":"张飞／夏侯霸","init":true},"guanzhang":{"name":"关兴&张苞","init":true},"zhaoyun":{"name":"赵云","init":true},"zhugeliang":{"name":"诸葛亮／姜维","init":true},"huangyueying":{"name":"黄月英／SP黄月英／陆抗","init":true},"sunquan":{"name":"孙权","init":true},"sunshangxiang":{"name":"孙尚香","init":true},"diaochan":{"name":"貂蝉／SP貂蝉","init":true},"lvbu":{"name":"吕布","init":true},"huatuo":{"name":"华佗","init":true},"daxiaoqiao":{"name":"大小乔","init":true},"shen_simayi":{"name":"神司马懿","init":true},"sunluyu":{"name":"孙鲁育","init":true},"shen_zhaoyun":{"name":"神赵云","init":true},"caozhang":{"name":"曹彰","init":true}},package:{
    character:{
        character:{
            "re_zhenji":["female","wei",3,["new_reluoshen","qingguo"],[]],
            "re_zhugeliang":["male","shu",3,["new_reguanxing","kongcheng"],[]],
            "re_huangyueyingx":["female","shu",3,["new_rejizhi","new_reqicai"],["des:荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。"]],
            "re_sunquan":["male","wu",4,["new_rezhiheng","new_rejiuyuan"],["zhu"]],
            "re_sunshangxiang":["female","wu",3,["new_rejieyin","xiaoji"],[]],
            "re_diaochan":["female","qun",3,["lijian","new_rebiyue"],[]],
            "re_huaxiong":["male","qun",6,["new_reyaowu"],[]],
            "re_jikang":["male","wei",3,["new_qingxian","new_juexiang"],[]],
        },
        translate:{
            "re_zhenji":"界甄姬",
            "re_zhugeliang":"界诸葛亮",
            "re_sunquan":"界孙权",
            "re_sunshangxiang":"界孙尚香",
            "re_huaxiong":"界华雄",
            "re_huangyueyingx":"界黄月英",
            "re_diaochan":"界貂蝉",
            "re_jikang":"新嵇康",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
            "new_yajiao":{
                audio:"reyajiao",
                trigger:{
                    player:["respond","useCard"],
                },
                frequent:true,
                filter:function (event,player){
        return player!=_status.currentPhase&&get.itemtype(event.cards)=='cards';
    },
                content:function (){
        "step 0"
        event.card=get.cards();
        player.showCards(event.card);
        event.same=false;
        if(get.type(event.card[0],'trick')==get.type(trigger.card,'trick')) event.same=true;
            player.chooseTarget('选择获得此牌的角色',true).set('ai',function(target){
                var att=get.attitude(_status.event.player,target);
                if(_status.event.du){
                    if(target.hasSkillTag('nodu')) return 0;
                    return -att;
                }
                if(!_status.event.same) att+=target==_status.event.player?1:0;
                if(att>0){
                    return att+Math.max(0,5-target.countCards('h'));
                }
                return att;
            }).set('du',event.card.name=='du').set('same',event.same);
        "step 1"
        if(result.targets){
            player.line(result.targets,'green');
            result.targets[0].gain(event.card,'gain2');
            if(!event.same) player.chooseToDiscard(true);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player){
                if(get.tag(card,'respond')&&player.countCards('h')>1) return [1,0.2];
            },
                    },
                },
            },
            "new_liyu":{
                audio:"liyu",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        if(event._notrigger.contains(event.player)) return false;
        return event.card&&event.card.name=='sha'&&event.player.isAlive()&&event.player.countGainableCards(player,'he')>0;
    },
                direct:true,
                content:function (){
        'step 0'
        player.gainPlayerCard(get.prompt('new_liyu',trigger.player),trigger.player,'he').set('ai',function(card){
            var player=_status.event.player;
            var evt=_status.event.target;
            if(get.type(card)=='equip'){
                if(get.attitude(player,evt)>0&&game.hasPlayer(function(current){
                    return (player.canUse({name:'juedou'},current)&&current!=evt.target&&get.effect(current,{name:'juedou'},player,player)>2);
                })){
                    return 5;
                }
                else if(game.hasPlayer(function(current){
                    return (player.canUse({name:'juedou'},current)&&current!=evt&&current!=player&&get.effect(current,{name:'juedou'},player,player)<0);
                })){
                    return 1;
                }
                else return 4;
            };
            return 3;
        });
        'step 1'
        if(result.bool){
            player.showCards(result.cards);
            player.logSkill('new_liyu',trigger.player);
            if(get.type(result.cards[0])!='equip'){
                trigger.player.draw();
                event.finish();
            }
        else{
            trigger.player.chooseTarget(function(card,player,target){
            var evt=_status.event.getParent();
            return evt.player.canUse({name:'juedou'},target)&&target!=_status.event.player;
        },get.prompt('liyu')).set('ai',function(target){
            var evt=_status.event.getParent();
            return get.effect(target,{name:'juedou'},evt.player,_status.event.player)-2;
        });
        }
        }
        else event.finish();
        'step 2'
        if(result.targets){
            player.useCard({name:'juedou'},result.targets[0],'noai');
        }
    },
                ai:{
                    halfneg:true,
                },
            },
            "new_retuxi":{
                audio:"retuxi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                priority:-10,
                filter:function (event){
        return event.num>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('new_retuxi'),[1,trigger.num],function(card,player,target){
            return target.countCards('h')>0&&player!=target;
        },function(target){
            var att=get.attitude(_status.event.player,target);
            if(target.hasSkill('tuntian')) return att/10;
            return 1-att;
        });
        "step 1"
        if(result.bool){
            player.logSkill('new_retuxi',result.targets);
            player.gainMultiple(result.targets);
            trigger.num-=result.targets.length;
        }
        else{
            event.finish();
        }
        "step 2"
        if(trigger.num<=0) game.delay();
    },
                ai:{
                    threaten:1.6,
                    expose:0.2,
                },
            },
            "new_reyiji":{
                audio:"reyiji",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        "step 0"
        event.num=1;
        event.count=1;
        "step 1"
        player.gain(get.cards(2));
        player.$draw(2);
        "step 2"
        player.chooseCardTarget({
            filterCard:true,
            selectCard:[1,2],
            filterTarget:function(card,player,target){
                return player!=target&&target!=event.temp;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
        "step 3"
        if(result.bool){
            player.$give(result.cards.length,result.targets[0]);
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards);
            if(num==1){
                event.temp=result.targets[0];
                event.num++;
                event.goto(2);
            }
            else if(event.count<trigger.num){
                delete event.temp;
                event.num=1;
                event.count++;
                event.goto(1);
            }
        }
        else if(event.count<trigger.num){
            delete event.temp;
            event.num=1;
            event.count++;
            event.goto(1);
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    result:{
                        effect:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num=1;
                    if(get.attitude(player,target)>0){
                        if(player.needsToDiscard()){
                            num=0.7;
                        }
                        else{
                            num=0.5;
                        }
                    }
                    if(player.hp>=4) return [1,num*2];
                    if(target.hp==3) return [1,num*1.5];
                    if(target.hp==2) return [1,num*0.5];
                }
            },
                    },
                    threaten:0.6,
                },
            },
            "new_rejianxiong":{
                audio:"rejianxiong",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        "step 0"
        if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
            player.gain(trigger.cards,"gain2");
        }
        player.draw();
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&player!=target) return [1,0.6];
            },
                    },
                },
            },
            "new_reluoyi":{
                audio:"reluoyi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                content:function (){
        "step 0"
        event.cards=get.cards(3);
        player.showCards(event.cards,'裸衣');
        player.chooseBool("是否放弃摸牌？").ai=function(event,player){
            var num=3
            for(var i=0;i<event.cards.length;i++){
                if(get.type(event.cards[i])!='basic'&&event.cards[i].name!='juedou'&&
                    (get.type(event.cards[i])!='equip'||get.subtype(event.cards[i])!='equip1')){
                    num--;
                }
            }
            return num>1
        };
        "step 1"
        if(result.bool){
        for(var i=0;i<cards.length;i++){
            if(get.type(cards[i])!='basic'&&cards[i].name!='juedou'&&
                (get.type(cards[i])!='equip'||get.subtype(cards[i])!='equip1')){
                cards[i].discard();
                cards.splice(i--,1);
            }
        }
        player.gain(cards,'gain2');
        player.addTempSkill('reluoyi2',{player:'phaseBefore'});
        trigger.cancel();
        }
        else for(var i=0;i<cards.length;i++){
                cards[i].discard();
        }
    },
            },
            "new_rewusheng":{
                mod:{
                    targetInRange:function (card){
            if(get.suit(card)=='diamond'&&(_status.event.skill=='new_rewusheng'||card.name=='sha')) return true;
        },
                },
                audio:"wusheng",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
        if(get.zhu(player,'shouyue')) return true;
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('he')) return false;
        }
        else{
            if(!player.countCards('he',{color:'red'})) return false;
        }
    },
                prompt:"将一张红色牌当杀使用或打出",
                check:function (card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function (player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('he')) return false;
            }
            else{
                if(!player.countCards('he',{color:'red'})) return false;
            }
        },
                    respondSha:true,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "new_yijue":{
                audio:"yijue",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filterCard:true,
                check:function (card){
        return 8-get.value(card);
    },
                content:function (){
        "step 0"
        target.chooseCard(true).ai=function(card){
            var player=_status.event.player;
            if((player.hasShan()||player.hp<3)&&get.color(card)=='black') return 0.5;
            return Math.max(1,20-get.value(card));
        };
        "step 1"
        target.showCards(result.cards);
        event.card2=result.cards[0];
        if(get.color(event.card2)=='black'){
            if(!target.hasSkill('fengyin')){
                target.addTempSkill('fengyin');
            }
            target.addTempSkill('new_yijue2');
            event.finish();
        }
        else{
            target.$give(event.card2,player);
            player.gain(event.card2);
            if(target.hp<target.maxHp){
                player.chooseBool('是否让目标回复一点体力？').ai=function(event,player){
                    return get.recoverEffect(target,player,player)>0;
                };
            }
        }
        "step 2"
        if(result.bool){
            target.recover();
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                if(target.countCards('h')>target.hp+1&&get.recoverEffect(target)>0){
                    return 1;
                }
                if(player.canUse('sha',target)&&(player.countCards('h','sha')||player.countCards('he',{color:'red'}))){
                    return -2;
                }
                return -0.5;
            },
                    },
                    order:9,
                },
            },
            "new_yijue2":{
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event){
        return event.source&&event.source.hasSkill('new_yijue')&&event.card&&event.card.name=='sha'&&get.suit(event.card)=='heart'&&event.notLink();
    },
                silent:true,
                popup:false,
                forced:true,
                content:function (){
        trigger.num++;
    },
                mark:true,
                mod:{
                    cardEnabled:function (){
            return false;
        },
                    cardUsable:function (){
            return false;
        },
                    cardRespondable:function (){
            return false;
        },
                    cardSavable:function (){
            return false;
        },
                },
                intro:{
                    content:"不能使用或打出卡牌",
                },
            },
            "new_repaoxiao":{
                audio:"paoxiao",
                inherit:"paoxiao",
                mod:{
                    targetInRange:function (card,player){
            if(get.cardCount({name:'sha'},player)>0) return true;
        },
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            "new_tishen":{
                trigger:{
                    player:"phaseUseEnd",
                },
                check:function (event,player){
        var num=0;
        var he=player.getCards('he');
        for(var i=0;i<he.length;i++){
            if(get.type(he[i],'trick')=='trick'){
                num++;
            }
            if(get.type(he[i])=='equip'){
                var subtype=get.subtype(he[i]);
                if(subtype=='equip3'||subtype=='equip4'){
                    num++;
                }
            }
        }
        return num==0||num<=player.countCards('h')-player.maxHandcard;
    },
                content:function (){
        var list=[];
        var he=player.getCards('he');
        for(var i=0;i<he.length;i++){
            if(get.type(he[i],'trick')=='trick'){
                list.push(he[i]);
            }
            if(get.type(he[i])=='equip'){
                var subtype=get.subtype(he[i]);
                if(subtype=='equip3'||subtype=='equip4'){
                    list.push(he[i]);
                }
            }
        }
        if(list.length) player.discard(list);
        player.addTempSkill('new_tishen2',{player:'phaseBefore'});
    },
                audio:"retishen",
            },
            "new_tishen2":{
                trigger:{
                    target:"shaUnhirt",
                },
                filter:function (event,player){
        if(get.itemtype(event.cards)!='cards') return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].isInPile()){
                return true;
            }
        }
        return false;
    },
                forced:true,
                nopop:true,
                content:function (){
        player.logSkill('new_tishen');
        var list=[];
            for(var i=0;i<trigger.cards.length;i++){
                if(trigger.cards[i].isInPile()){
                    list.push(trigger.cards[i]);
                }
            }
        player.gain(list,'gain2');
    },
            },
            "new_qingjian":{
                audio:"qingjian",
                unique:true,
                trigger:{
                    player:"gainAfter",
                },
                direct:true,
                usable:1,
                filter:function (event,player){
        if(event.parent.parent.name=='phaseDraw') return false;
        return event.cards&&event.cards.length>0
    },
                content:function (){
        "step 0"
        player.chooseCardTarget({
            position:'h',
            filterCard:true,
            selectCard:[1,Infinity],
            filterTarget:function(card,player,target){
                return player!=target;
            },
            ai1:function(card){
                if(get.attitude(_status.event.player,_status.currentPhase)<0&&_status.currentPhase.needsToDiscard()&&card.name!='du') return -1;
                for(var i=0;i<ui.selected.cards.length;i++){
                    if(get.type(ui.selected.cards[i])==get.type(card)||(ui.selected.cards[i].name=='du'&&card.name!='du')) return -1;
                };
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                if(get.attitude(_status.event.player,_status.currentPhase)<0) return -1;
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                if(target.countCards('h')>_status.event.player.countCards('h')) return 0;
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            var cards=result.cards;
            var type=[];
            for(var i=0;i<cards.length;i++){
                if(!type.contains(get.type(cards[i],'trick'))) type.push(get.type(cards[i],'trick'));
            }
            player.storage.new_qingjian++;
            player.logSkill('new_qingjian',target);
            target.gain(cards,player);
            player.$give(cards,target);
            _status.currentPhase.addTempSkill('qingjian_add');
            _status.currentPhase.storage.qingjian_add=type.length;
        }
        else{
            player.storage.counttrigger.new_qingjian--;
        }
    },
                ai:{
                    expose:0.3,
                },
            },
            "qingjian_add":{
                mark:true,
                intro:{
                    content:function (storage,player){
            return '手牌上限+'+player.storage.qingjian_add;
        },
                },
                mod:{
                    maxHandcard:function (player,num){
            return num+player.storage.qingjian_add;
        },
                },
                onremove:function (player){
        delete player.storage.qingjian_add;
    },
            },
            "new_reqingnang":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                    "off2":{
                        sub:true,
                    },
                },
                audio:"qingnang",
                enable:"phaseUse",
                filterCard:true,
                check:function (card,event,player){
        if(game.countPlayer(function(current){
            return (get.recoverEffect(current,player,player)>0&&get.attitude(player,current)>2);
        })>1&&get.color(card)=='black'&&player.countCards('h',{color:'red'})>0) return 3-get.value(card);
        return 9-get.value(card);
    },
                filter:function (event,player){
        return !player.hasSkill('new_reqingnang_off2');
    },
                filterTarget:function (card,player,target){
        if(target.hp>=target.maxHp||target.hasSkill('new_reqingnang_off')) return false;
        return true;
    },
                content:function (){
        target.addTempSkill('new_reqingnang_off');
        if(get.color(cards[0])=='black') player.addTempSkill('new_reqingnang_off2');
        target.recover();
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            "new_reyaowu":{
                trigger:{
                    player:"damageEnd",
                },
                priority:1,
                audio:"yaowu",
                filter:function (event){
        if(event.card&&(event.card.name=='sha')){
            if(['red','black'].contains(get.color(event.card))) return true;
        }
        return false;
    },
                forced:true,
                check:function (event){
        if(event.card&&(event.card.name=='sha')){
            return get.color(event.card)=='black';
        }
    },
                content:function (){
        if(get.color(trigger.cards)=='black') player.draw();
        else trigger.source.chooseDrawRecover(true);
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&(get.color(card)=='red')){
                    return [1,-2];
                }
                if(card.name=='sha'&&(get.color(card)=='black')){
                    return [1,0.6];
                }
            },
                    },
                },
            },
            "new_rebiyue":{
                audio:"biyue",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
        var num=1;
        if(!player.countCards('h')){
            num=2;
        }
        player.draw(num);
    },
            },
            "new_reqicai":{
                mod:{
                    targetInRange:function (card,player,target,now){
            var type=get.type(card);
            if(type=='trick'||type=='delay') return true;
        },
                    canBeDiscarded:function (card){
            if(get.position(card)=='e') return false;
        },
                    cardDiscardable:function (card){
            if(get.position(card)=='e') return false;
        },
                },
            },
            "new_fuhun":{
                enable:["chooseToUse","chooseToRespond"],
                filterCard:true,
                selectCard:2,
                position:"h",
                audio:"fuhun",
                derivation:["new_rewusheng","new_repaoxiao"],
                viewAs:{
                    name:"sha",
                },
                prompt:"将两张手牌当杀使用或打出",
                check:function (card){
        if(_status.event.player.hasSkill('wusheng')&&get.color(card)=='red') return 0;
        if(_status.event.name=='chooseToRespond'){
            if(card.name=='sha') return 0;
            return 6-get.useful(card);
        }
        if(_status.event.player.countCards('h')<4) return 6-get.useful(card);
        return 7-get.useful(card);
    },
                ai:{
                    respondSha:true,
                    order:function (item,player){
            if(player.hasSkill('wusheng')&&player.hasSkill('paoxiao')){
                return 1;
            }
            if(player.countCards('h')<4){
                return 1;
            }
            return 4;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
                group:"new_fuhun2",
            },
            "new_fuhun2":{
                trigger:{
                    source:"damageAfter",
                },
                forced:true,
                filter:function (event,player){
        if(player.hasSkill('fuhun3')) return false;
        return event.getParent().skill=='new_fuhun';
    },
                content:function (){
        player.addTempSkill('new_rewusheng');
        player.addTempSkill('new_repaoxiao');
        player.addTempSkill('fuhun3');
    },
            },
            "new_zhengnan":{
                audio:"zhengnan",
                trigger:{
                    global:"dieAfter",
                },
                frequent:true,
                content:function (){
        'step 0'
        player.draw(3);
        var list=[];
        if(!player.hasSkill('new_rewusheng')&&!player.hasSkill('wusheng')){
            list.push('new_rewusheng');
        }
        if(!player.hasSkill('dangxian')){
            list.push('dangxian');
        }
        if(!player.hasSkill('zhiman')){
            list.push('zhiman');
        }
        if(list.length){
            player.chooseControl(list).set('prompt','选择获得一项技能');
        }
        'step 1'
        player.addSkill(result.control);
        player.popup(result.control);
        game.log(player,'获得技能','【'+get.translation(result.control)+'】');
    },
                ai:{
                    threaten:1.4,
                },
            },
            "new_zhiji":{
                skillAnimation:true,
                audio:"zhiji",
                unique:true,
                priority:-10,
                derivation:"new_reguanxing",
                trigger:{
                    player:"phaseBeginStart",
                },
                forced:true,
                filter:function (event,player){
        if(player.storage.new_zhiji) return false;
        return player.countCards('h')==0;
    },
                content:function (){
        "step 0"
        player.awakenSkill('new_zhiji');
        player.chooseControl('zhiji_recover','zhiji_draw',function(event,player){
            if(player.hp>=2) return 'zhiji_draw';
            return 'zhiji_recover';
        });
        "step 1"
        if(result.control=='zhiji_draw'){
            player.draw(2);
        }
        else{
            player.recover();
        }
        "step 2"
        player.loseMaxHp();
        player.storage.new_zhiji=true;
        if(player.hp>player.maxHp) player.hp=player.maxHp;
        player.update();
        player.addSkill('new_reguanxing');
    },
            },
            "new_rezhiheng":{
                audio:"zhiheng",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:true,
                selectCard:[1,Infinity],
                check:function (card){
        var player=_status.event.player;
        if(get.position(card)=='h'&&!player.countCards('h',function(card){
            return get.value(card)>=8;
        })){
            return 8-get.value(card);
        }
        return 6-get.value(card)
    },
                delay:0,
                content:function (){
        'step 0'
        if(!player.hasSkill('new_rezhiheng_delay')) game.delayx();
        'step 1'
        player.draw(cards.length);
    },
                group:"new_rezhiheng_draw",
                subSkill:{
                    draw:{
                        trigger:{
                            player:"loseEnd",
                        },
                        silent:true,
                        filter:function (event,player){
                if(event.getParent(2).skill!='new_rezhiheng') return false;
                if(player.countCards('h')) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                        content:function (){
                player.draw();
                player.addTempSkill('new_rezhiheng_delay','new_rezhihengAfter');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    delay:{
                        sub:true,
                    },
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.55,
                },
            },
            "new_rejiuyuan":{
                audio:"jiuyuan",
                unique:true,
                zhuSkill:true,
                global:"new_rejiuyuan2",
            },
            "new_rejiuyuan2":{
                audio:"jiuyuan",
                forceaudio:true,
                trigger:{
                    player:"taoBegin",
                },
                filter:function (event,player){
                    if(event.target.isDying()) return false;
                    if(player.group!='wu') return false;
                    return game.hasPlayer(function(target){
                        return player!=target&&target.isDamaged()&&target.hp<player.hp&&target.hasZhuSkill('new_rejiuyuan',player);
                    });
                },
                direct:true,
                content:function (){
                    'step 0'
                    var list=game.filterPlayer(function(target){
                        return player!=target&&target.isDamaged()&&target.hp<player.hp&&target.hasZhuSkill('new_rejiuyuan',player);
                    });
                    list.sortBySeat();
                    event.list=list;
                    'step 1'
                    if(event.list.length){
                        var current=event.list.shift();
                        event.current=current;
                        player.chooseBool(get.prompt('new_rejiuyuan',current)).set('choice',get.attitude(player,current)>0);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        player.logSkill('new_rejiuyuan',event.current);
                        event.current.recover();
                        player.draw();
                    }
                    event.goto(1);
                },
            },
            "new_rejieyin":{
                audio:"jieyin",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                position:"he",
                filter:function (event,player){
                return player.countCards('he')>0;
            },
                check:function (card){
                var player=_status.event.player;
                if(get.position(card)=='e'){
                    var subtype=get.subtype(card);
                    if(!game.hasPlayer(function(current){
                        return current!=player&&current.hp!=player.hp&&get.attitude(player,current)>0&&!current.countCards('e',{subtype:subtype});
                    })){
                        return 0;
                    }
                    if(player.countCards('h',{subtype:subtype})) return 20-get.value(card);
                    return 10-get.value(card);
                }
                else{
                    if(player.countCards('e')) return 0;
                    if(player.countCards('h',{type:'equip'})) return 0;
                    return 8-get.value(card);
                }
            },
                filterTarget:function (card,player,target){
                if(target.sex!='male') return false;
                var card=ui.selected.cards[0];
                if(!card) return false;
                if(get.position(card)=='e'&&target.countCards('e',{subtype:get.subtype(card)})) return false;
                return true;
            },
                discard:false,
                delay:0,
                lose:false,
                content:function (){
                'step 0'
                if(get.position(cards[0])=='e'){
                    player.$give(cards,target);
                    target.equip(cards[0]);
                }
                else{
                    player.discard(cards);
                }
                'step 1'
                if(player.hp>target.hp){
                    player.draw();
                    if(target.isDamaged()) target.recover();
                }
                else if(player.hp<target.hp){
                    target.draw();
                    if(player.isDamaged()) player.recover();
                }
            },
                ai:{
                    order:function (){
                    var player=_status.event.player;
                    var es=player.getCards('e');
                    for(var i=0;i<es.length;i++){
                        if(player.countCards('h',{subtype:get.subtype(es[i])})) return 10;
                    }
                    return 2;
                },
                    result:{
                        target:function (player,target){
                        var goon=function(){
                            var es=player.getCards('e');
                            for(var i=0;i<es.length;i++){
                                if(player.countCards('h',{subtype:get.subtype(es[i])})) return true;
                            }
                            return false;
                        }
                        if(player.hp<target.hp){
                            if(player.isHealthy()){
                                if(!player.needsToDiscard(1)||goon()) return 0.1;
                                return 0;
                            }
                            return 1.5;
                        }
                        if(player.hp>target.hp){
                            if(target.isHealthy()){
                                if(!player.needsToDiscard(1)||goon()) return 0.1;
                                return 0;
                            }
                            return 1;
                        }
                        return 0;
                    },
                    },
                    threaten:2.3,
                },
            },
            "new_baobian":{
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["tiaoxin","new_repaoxiao","xinshensu"],
                content:function (){
        player.removeAdditionalSkill('baobian');
        var list=[];
        if(player.hp<=3){
            list.push('tiaoxin');
        }
        if(player.hp<=2){
            list.push('new_repaoxiao');
        }
        if(player.hp<=1){
            list.push('xinshensu');
        }
        if(list.length){
            player.addAdditionalSkill('baobian',list);
        }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            "new_reluoshen":{
                audio:"luoshen",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
        "step 0"
        if(event.cards==undefined) event.cards=[];
        player.judge(function(card){
            if(get.color(card)=='black') return 1.5;
            return -1.5;
        },ui.special);
        "step 1"
        if(result.judge>0){
            event.cards.push(result.card);
            if(lib.config.autoskilllist.contains('new_reluoshen')){
                player.chooseBool('是否再次发动【洛神】？');
            }
            else{
                event._result={bool:true};
            }
        }
        else{
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i])!='s'){
                    event.cards.splice(i,1);i--;
                }
            }
            player.gain(event.cards,'gain2');
            player.storage.new_reluoshen=event.cards.slice(0);
            event.finish();
        }
        "step 2"
        if(result.bool){
            event.goto(0);
        }
        else{
            if(event.cards.length){
                player.gain(event.cards,'gain2');
                player.storage.new_reluoshen=event.cards.slice(0);
            }
        }
    },
                mod:{
                    ignoredHandcard:function (card,player){
            if(player.storage.new_reluoshen&&player.storage.new_reluoshen.contains(card)){
                return true;
            }
        },
                    cardDiscardable:function (card,player,name){
            if(name=='phaseDiscard'&&player.storage.new_reluoshen&&player.storage.new_reluoshen.contains(card)) return false;
        },
                },
                group:"new_reluoshen_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                delete player.storage.new_reluoshen;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "new_reguanxing":{
                audio:"guanxing",
                trigger:{
                    player:["phaseBegin","phaseEnd"],
                },
                frequent:true,
                filter:function (event,player,name){
        if(name=='phaseEnd'){
            return player.hasSkill('new_reguanxing_on');
        }
        return true;
    },
                content:function (){
        'step 0'
        event.num=game.countPlayer()<4?3:5;
        event.cards=get.cards(event.num);
        event.chosen=[];
        event.num1=0;
        event.num2=0;
        event.bottom=-1;
        'step 1'
        var js=player.getCards('j');
        var pos;
        var choice=-1;
        var getval=function(card,pos){
            if(js[pos]){
                return (get.judge(js[pos]))(card);
            }
            else if(event.triggername=='phaseEnd'&&get.attitude(player,player.getNext())<=0){
                return 11.5-get.value(card,player);
            }
            else{
                return get.value(card,player);
            }
        };
        event.discard=false;
        var minval=6;
        for(pos=0;pos<event.cards.length;pos++){
            var max=getval(event.cards[pos],pos);
            for(var j=pos+1;j<event.cards.length;j++){
                var current=getval(event.cards[j],pos);
                if(current>max){
                    choice=j;
                    max=current;
                }
            }
            if(event.bottom<0){
                if(!js[pos]){
                    if(max<minval){
                        event.bottom=pos;
                    }
                }
                else if(max<0){
                    event.bottom=pos;
                }
            }
            if(event.bottom>=0&&event.bottom<=pos){
                choice=pos;
                event.discard=true;break;
            }
            if(choice!=-1){
                break;
            }
        }
        player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
            return !_status.event.chosen.contains(button.link);
        }).set('chosen',event.chosen).set('ai',function(button){
            return button.link==_status.event.choice?1:0;
        }).set('choice',event.cards[choice]);
        event.pos=pos;
        'step 2'
        if(result.bool){
            var card=result.links[0];
            var index=event.cards.indexOf(card);
            event.card=card;
            event.chosen.push(card);
            event.cards.remove(event.card);
            var controlai=event.pos||0;
            if(event.discard){
                controlai=event.cards.length+1;
            }
            var buttons=event.cards.slice(0);
            player.chooseControl(function(){
                return _status.event.controlai;
            }).set('controlai',controlai).set('sortcard',buttons).set('tosort',card);
        }
        else{
            event.goto(4);
        }
        'step 3'
        if(typeof result.index=='number'){
            if(result.index>event.cards.length){
                ui.cardPile.appendChild(event.card);
                event.num2++;
            }
            else{
                event.cards.splice(result.index,0,event.card);
            }
            event.num--;
            if(event.num>0){
                event.goto(1);
            }
        }
        'step 4'
        while(event.cards.length){
            ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
            event.num1++;
        }
        var js=player.getCards('j');
        if(js.length==1){
            if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
                player.addTempSkill('guanxing_fail');
            }
        }
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
        if(event.triggername=='phaseBegin'&&event.num1==0){
            player.addTempSkill('new_reguanxing_on');
        }
    },
                subSkill:{
                    on:{
                        sub:true,
                    },
                },
            },
            "new_linglong":{
                inherit:"bagua_skill",
                filter:function (event,player){
        if(!lib.skill.bagua_skill.filter(event,player)) return false;
        if(player.getEquip(2)) return false;
        return true;
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player==target&&get.subtype(card)=='equip2'){
                    if(get.equipValue(card)<=7.5) return 0;
                }
                if(target.getEquip(2)) return;
                return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
            },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
            if(player.getEquip(3)||player.getEquip(4)) return;
            return num+1;
        },
                    targetInRange:function (card,player,target,now){
            if(player.getEquip(5)) return;
            var type=get.type(card);
            if(type=='trick'||type=='delay') return true;
        },
                    canBeDiscarded:function (card,player){
            if(player.getEquip(5)) return;
            if(get.position(card)=='e') return false;
        },
                    cardDiscardable:function (card,player){
            if(player.getEquip(5)) return;
            if(get.position(card)=='e') return false;
        },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                audio:"linglong",
                check:function (event,player){
        if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                content:function (){
        "step 0"
        player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:{name:'shan'}}
        }
    },
            },
            "new_rejizhi":{
                audio:"jizhi",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        if(get.type(event.card)=='delay') return false;
        return (get.type(event.card,'trick')=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
                init:function (player){
        player.storage.new_rejizhi=0;
    },
                content:function (){
        'step 0'
        player.draw();
        'step 1'
        if(get.type(result[0])=='basic'){
            event.card=result[0];
            player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
                return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
            }).set('value',get.value(event.card,player));
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            player.discard(event.card);
            player.storage.new_rejizhi++;
            if(_status.currentPhase==player){
                player.markSkill('new_rejizhi');
            }
        }
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
                mod:{
                    maxHandcard:function (player,num){
            if(_status.currentPhase==player){
                return num+player.storage.new_rejizhi;
            }
            return num;
        },
                },
                intro:{
                    content:"本回合手牌上限+#",
                },
                group:"new_rejizhi_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                player.storage.new_rejizhi=0;
                player.unmarkSkill('new_rejizhi');
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "new_xingwu":{
                audio:"xingwu",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                direct:true,
                intro:{
                    content:"cards",
                },
                init:function (player){
        player.storage.new_xingwu=[];
    },
                content:function (){
        'step 0'
        player.chooseCard(get.prompt('new_xingwu')).set('ai',function(card){
            var player=_status.event.player;
            for(var i=0;i<player.storage.new_xingwu.length;i++){
                if(get.suit(player.storage.new_xingwu[i])==get.suit(card)) return 0;
            }
            if(player.storage.new_xingwu.length==2){
                if(!game.hasPlayer(function(current){
                    return (current!=player&&
                        get.damageEffect(current,player,player)>0&&
                        get.attitude(player,current)<0)
                })) return 0;
            }
            return 7-get.value(card);
        });
        'step 1'
        if(result.bool){
            player.logSkill('new_xingwu');
            if(player.storage.new_xingwu.length<2){
                player.$give(result.cards,player);
            }
            player.lose(result.cards,ui.special);
            player.storage.new_xingwu=player.storage.new_xingwu.concat(result.cards);
            player.markSkill('new_xingwu');
            player.syncStorage('new_xingwu');
        }
        else{
            event.finish();
        }
        'step 2'
        var suitlist=[];
        for(var i=0;i<player.storage.new_xingwu.length;i++){
            if(!suitlist.contains(get.suit(player.storage.new_xingwu[i]))){
                suitlist.push(get.suit(player.storage.new_xingwu[i]));
            }
        }
        if(suitlist.length==3){
            player.chooseButton(['请选择要弃置的「星舞」牌',player.storage.new_xingwu],true,3).set('filterButton',function(button){
            if(ui.selected.buttons.length){
                for(var i=0;i<ui.selected.buttons.length;i++){
                    if(get.suit(ui.selected.buttons[i])==get.suit(button)) return false;
                }
            }
            return true;
        }).set('ai',function(button){
            return 1;
        });
        }
        else{
            event.finish();
        }
        'step 3'
        if(result.links){
            player.$throw(result.links);
            for(var i=0;i<result.links.length;i++){
                player.storage.new_xingwu.remove(result.links[i]);
                result.links[i].discard();
            }
            player.syncStorage();
            if(!player.storage.new_xingwu.length) player.unmarkSkill('new_xingwu');
            player.chooseTarget(function(card,player,target){
                return target!=player;
            },'对一名男/女性角色造成两/一点伤害并弃置其装备区内的牌').set('ai',function(target){
                var player=_status.event.player;
                if(get.attitude(player,target)>0) return -1;
                return get.damageEffect(target,player,player)*target.sex=='male'?2:1+target.countCards('e')/2;
            });
        }
        'step 4'
        if(result.bool){
            var target=result.targets[0];
            var num=target.sex=="male"?2:1;
            target.damage(num);
            event.target=target;
            player.line(target,'green');
        }
        else{
            event.finish();
        }
        'step 5'
        if(event.target&&event.target.isAlive()){
            var es=event.target.getCards('e');
            if(es.length){
                event.target.discard(es);
            }
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            "new_luoyan":{
                group:["new_luoyan_tianxiang","new_luoyan_liuli"],
            },
            "new_luoyan_tianxiang":{
                inherit:"retianxiang",
                filter:function (event,player){
        if(!player.storage.new_xingwu||!player.storage.new_xingwu.length) return false;
        if(player.hasSkill('retianxiang')||player.hasSkill('tianxiang')) return false;
        return lib.skill.tianxiang.filter(event,player);
    },
                audio:"tianxiang",
                trigger:{
                    player:"damageBefore",
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseCardTarget({
                        filterCard:function(card,player){
                            return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
                        },
                        filterTarget:function(card,player,target){
                            return player!=target;
                        },
                        // position:'he',
                        ai1:function(card){
                            return 10-get.value(card);
                        },
                        ai2:function(target){
                            var att=get.attitude(_status.event.player,target);
                            var trigger=_status.event.getTrigger();
                            var da=0;
                            if(_status.event.player.hp==1){
                                da=10;
                            }
                            var eff=get.damageEffect(target,trigger.source,target);
                            if(att==0) return 0.1+da;
                            if(eff>=0&&att>0){
                                return att+da;
                            }
                            if(att>0&&target.hp>1){
                                if(target.maxHp-target.hp>=3) return att*1.1+da;
                                if(target.maxHp-target.hp>=2) return att*0.9+da;
                            }
                            return -att+da;
                        },
                        prompt:get.prompt('retianxiang'),
                        prompt2:lib.translate.retianxiang_info
                    });
                    "step 1"
                    if(result.bool){
                        player.discard(result.cards,ui.special);
                        var target=result.targets[0];
                        player.chooseControlList(true,function(event,player){
                            var target=_status.event.target;
                            var att=get.attitude(player,target);
                            if(target.hasSkillTag('maihp')) att=-att;
                            if(att>0){
                                return 0;
                            }
                            else{
                                return 1;
                            }
                        },
                            ['令'+get.translation(target)+'受到伤害来源对其造成的1点伤害，然后摸X张牌（X为其已损失体力值且至多为5）',
                            '令'+get.translation(target)+'失去1点体力，然后获得'+get.translation(result.cards)]).set('target',target);
                        player.logSkill(event.name,target);
                        trigger.cancel();
                        event.target=target;
                        event.card=result.cards[0];
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(typeof result.index=='number'){
                        if(result.index){
                            event.target.loseHp().type='retianxiang';
                            event.target.addSkill('retianxiang3');
                            event.target.storage.retianxiang3=event.card;
                        }
                        else{
                            event.target.damage(trigger.source).type='retianxiang';
                            event.target.addSkill('retianxiang2');
                            if(get.position(event.card)=='s'){
                                event.card.discard();
                            }
                        }
                    }
                },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing',false,target)) return;
                            if(get.tag(card,'damage')&&target.countCards('he')>1) return 0.7;
                        },
                    },
                },
            },
            "new_luoyan_liuli":{
                inherit:"liuli",
                filter:function (event,player){
        if(!player.storage.new_xingwu||!player.storage.new_xingwu.length) return false;
        if(player.hasSkill('liuli')) return false;
        return lib.skill.liuli.filter(event,player);
    },
                audio:"ext:新•界限突破:2",
                trigger:{
                    target:"shaBefore",
                },
                direct:true,
                priority:5,
                content:function (){
                    "step 0"
                    var next=player.chooseCardTarget({
                        position:'he',
                        filterCard:lib.filter.cardDiscardable,
                        filterTarget:function(card,player,target){
                            var trigger=_status.event.getTrigger();
                            if(get.distance(player,target,'attack')<=1&&
                                target!=trigger.player&&target!=player){
                                if(player.canUse(trigger.card,target)) return true;
                            }
                            return false;
                        },
                        ai1:function(card){
                            return get.unuseful(card)+9;
                        },
                        ai2:function(target){
                            if(_status.event.player.countCards('h','shan')){
                                return -get.attitude(_status.event.player,target);
                            }
                            if(get.attitude(_status.event.player,target)<5){
                                return 6-get.attitude(_status.event.player,target);
                            }
                            if(_status.event.player.hp==1&&player.countCards('h','shan')==0){
                                return 10-get.attitude(_status.event.player,target);
                            }
                            if(_status.event.player.hp==2&&player.countCards('h','shan')==0){
                                return 8-get.attitude(_status.event.player,target);
                            }
                            return -1;
                        },
                        prompt:get.prompt('liuli')
                    });
                    "step 1"
                    if(result.bool){
                        player.discard(result.cards);
                        player.logSkill(event.name,result.targets);
                        trigger.target=result.targets[0];
                        trigger.targets.remove(player);
                        trigger.targets.push(result.targets[0]);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    trigger.untrigger();
                    trigger.trigger('useCardToBefore');
                    trigger.trigger('shaBefore');
                    game.delay();
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(target.countCards('he')==0) return;
                            if(card.name!='sha') return;
                            var min=1;
                            var friend=get.attitude(player,target)>0;
                            var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(player!=players[i]&&
                                    get.attitude(target,players[i])<0&&
                                    target.canUse(card,players[i])){
                                    if(!friend) return 0;
                                    if(get.effect(players[i],vcard,player,player)>0){
                                        if(!player.canUse(card,players[0])){
                                            return [0,0.1];
                                        }
                                        min=0;
                                    }
                                }
                            }
                            return min;
                        },
                    },
                },
            },
            "new_meibu":{
                audio:"meibu",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        return event.player!=player&&get.distance(event.player,player,'attack')<=1;
    },
                direct:true,
                derivation:["new_zhixi"],
                checkx:function (event,player){
        if(get.attitude(player,event.player)>=0) return false;
        var e2=player.getEquip(2);
        if(e2){
            if(e2.name=='tengjia') return true;
            if(e2.name=='bagua') return true;
        }
        return event.player.countCards('h')>event.player.hp;
    },
                content:function (){
        "step 0"
        var check=lib.skill.new_meibu.checkx(trigger,player);
        player.chooseToDiscard(get.prompt('new_meibu',trigger.player),'he').set('ai',function(card){
            if(_status.event.check) return 6-get.value(card);
            return 0;
        }).set('check',check).set('logSkill','new_meibu');
        "step 1"
        if(result.bool){
            var target=trigger.player;
            var card=result.cards[0];
            player.line(target,'green');
            target.addTempSkill('new_zhixi','phaseUseEnd');
            target.addTempSkill('new_meibu_range');
            if(card.name!='sha'&&get.type(card)!='trick'&&get.color(card)!='black'){
                target.storage.meibu=player;
            }
            target.markSkillCharacter('new_meibu',player,'魅步','锁定技，出牌阶段，你至多可使用X张牌，你使用了锦囊牌后不能再使用牌（X为你的体力值）。');
        }
    },
                ai:{
                    expose:0.2,
                },
                subSkill:{
                    range:{
                        mod:{
                            targetInRange:function (card,player,target){
                    if(target==player.storage.meibu){
                        return true;
                    }
                },
                        },
                        onremove:function (player){
                game.broadcast(function(player){
                    if(player.marks.new_meibu){
                        player.marks.new_meibu.delete();
                        delete player.marks.new_meibu;
                    }
                },player);
                if(player.marks.new_meibu){
                    player.marks.new_meibu.delete();
                    delete player.marks.new_meibu;
                    game.addVideo('unmark',player,'new_meibu');
                }
            },
                        trigger:{
                            player:"phaseUseEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('new_meibu_viewas');
                game.broadcastAll(function(player){
                    if(player.marks.new_meibu&&player.marks.new_meibu.info){
                        player.marks.new_meibu.info.content=player.marks.new_meibu.info.content.slice(8);
                    }
                },player);
            },
                        sub:true,
                    },
                    viewas:{
                        mod:{
                            cardEnabled:function (card,player){
                    return false;
                },
                            cardUsable:function (card,player){
                    return false;
                },
                            cardSavable:function (card,player){
                    return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "new_mumu":{
                audio:"mumu",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('new_mumu'),function(card,player,target){
            if(target==player) return false;
            return target.countCards('e')>0;
        }).set('ai',function(target){
            var player=_status.event.player;
            var att=get.attitude(player,target)
            if(target.getEquip(2)&&!player.getEquip(2)){
                return -2*att;
            }
            return -att;
        });
        'step 1'
        if(result.bool&&result.targets&&result.targets.length){
            event.target=result.targets[0];
            player.logSkill('new_mumu',event.target);
            player.line(event.target,'green');
            var e=event.target.getEquip(2);
            event.e=e;
            if(e){
                player.chooseControl('弃置一张装备牌','获得一张防具牌').set('ai',function(){
                    if(_status.event.player.getEquip(2)){
                        return '弃置一张装备牌';
                    }
                    return '获得一张防具牌';
                });
            }
            else{
                event.choice='弃置一张装备牌';
            }
        }else event.finish();
        'step 2'
        var choice=event.choice||result.control;
        if(choice=='弃置一张装备牌'){
            player.discardPlayerCard(event.target,'e',true);
        }
        else{
            if(event.e){
                player.gain(event.e);
                event.target.$give(event.e,player);
                player.addTempSkill('new_mumu2')
            }
        }
    },
            },
            "new_zhixi":{
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        if(get.type(event.card,'trick')=='trick') return true;
        return player.countUsed()>=player.hp;
    },
                content:function (){
        player.addTempSkill('new_meibu_viewas','phaseUseEnd');
    },
            },
            "new_mumu2":{
                mod:{
                    cardEnabled:function (card){if(card.name=='sha') return false},
                },
            },
            "new_qingxian":{
                group:["qingxian_draw"],
                enable:"phaseUse",
                audio:"qingxian",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                complexCard:true,
                complexSelect:true,
                selectTarget:function (){
        return ui.selected.cards.length;
    },
                filterCard:true,
                selectCard:function (){
        var player=_status.event.player;
        return [1,player.hp];
    },
                check:function (card){
        var player=_status.event.player;
        var number=game.countPlayer(function(target){
            if(player==target) return false;
            var pe=player.countCards('e');
            var te=target.countCards('e');
            if(pe>te&&target.isDamaged()&&get.attitude(player,target)>2) return true;
            else if(pe==te&&get.attitude(player,target)>2) return true;
            else if(pe<te&&get.attitude(player,target)<0) return true;
            return false;
        });
        if(ui.selected.cards.length<number) return 6-get.value(card);
        else return 0;
    },
                targetprompt:function (target){
        var pe=_status.event.player.countCards('e');
        var te=target.countCards('e');
        if(pe>te) return "回复体力";
        else if(pe==te) return "摸一张牌";
        else if(pe<te) return "失去体力";
    },
                line:"thunder",
                content:function (){
        var pe=player.countCards('e');
        var te=target.countCards('e');
        if(pe>te) target.recover();
        else if(pe==te) target.draw();
        else if(pe<te) target.loseHp();
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                var pe=player.countCards('e');
                var te=target.countCards('e');
                if(pe>te&&target.isDamaged()) return 2;
                else if(pe==te) return 1;
                else if(pe<te) return -2.5;
                else return 0;
            },
                    },
                },
            },
            "new_juexiang":{
                audio:"qingxian_jilie",
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                skillAnimation:true,
                derivation:["new_canyun"],
                content:function (){
        "step 0"
        if(trigger.source){
            trigger.source.discard(trigger.source.getCards('e'));
            trigger.source.loseHp();
        }
        player.chooseTarget('【绝响】：是否令一名其他角色获得技能〖残韵〗？',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(target.countCards('ej',{suit:'club'})) att=att*2;
            return 10+att;
        });
        "step 1"
        if(result.bool&&result.targets&&result.targets.length){
            event.target=result.targets[0];
            player.line(event.target,'thunder');
            event.target.addSkill('new_canyun');
            event.target.discardPlayerCard('是否弃置自己区域内的一张梅花牌，获得技能〖绝响〗？',event.target,'hej').set('ai',function(card){
                if(get.position(card)=='j') return 100+get.value(card);
                return 100-get.value(card);
            }).set('visible',true).set('filterButton',function(card){
                return get.suit(card.link)=='club';
            });
        }
        else event.finish()
        "step 2"
        if(result.bool) event.target.addSkill('new_juexiang');
    },
            },
            "new_canyun":{
                group:["qingxian_draw"],
                complexCard:true,
                complexSelect:true,
                marktext:"韵",
                init:function (player,skill){
        if(!player.storage[skill]) player.storage[skill]=[];
    },
                intro:{
                    content:function (storage){
            var str='';
            var str2='<li>出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色（不能选择已经成为过〖残韵〗目标的角色）。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）';
            if(storage.length>0){
                for(var i=0;i<storage.length;i++){
                    str+='、';
                    str+=get.translation(storage[i]);
                };
                str=str.slice(1);
                str2+=('<br><li>已对'+str+'发动过〖残韵〗');
            }
            return str2;
        },
                },
                mark:true,
                enable:"phaseUse",
                usable:1,
                check:function (card){
        var player=_status.event.player;
        var number=game.countPlayer(function(target){
            if(player==target) return false;
            var pe=player.countCards('e');
            var te=target.countCards('e');
            if(pe>te&&target.isDamaged()&&get.attitude(player,target)>2) return true;
            else if(pe==te&&get.attitude(player,target)>2) return true;
            else if(pe<te&&get.attitude(player,target)<0) return true;
            return false;
        });
        if(ui.selected.cards.length<number) return 6-get.value(card);
        else return 0;
    },
                filter:function (event,player){
        if(!player.storage.new_canyun) player.storage.new_canyun=[];
        return game.hasPlayer(function(current){
            return current!=player&&!player.storage.new_canyun.contains(current);
        });
    },
                filterTarget:function (card,player,target){
        return target!=player&&!player.storage.new_canyun.contains(target);
    },
                selectTarget:function (){
        return ui.selected.cards.length;
    },
                filterCard:true,
                selectCard:function (){
        var player=_status.event.player;
        return [1,player.hp];
    },
                targetprompt:function (target){
        var pe=_status.event.player.countCards('e');
        var te=target.countCards('e');
        if(pe>te) return "回复体力";
        else if(pe==te) return "摸一张牌";
        else if(pe<te) return "失去体力";
    },
                line:"thunder",
                content:function (){
        player.storage.new_canyun.push(target);
        var pe=player.countCards('e');
        var te=target.countCards('e');
        if(pe>te) target.recover();
        else if(pe==te) target.draw();
        else if(pe<te) target.loseHp();
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                var pe=player.countCards('e');
                var te=target.countCards('e');
                if(pe>te&&target.isDamaged()) return 2;
                else if(pe==te) return 1;
                else if(pe<te) return -2.5;
                else return 0;
            },
                    },
                },
            },
            "qingxian_draw":{
                trigger:{
                    player:["new_qingxianAfter","new_canyunAfter"],
                },
                forced:true,
                popup:false,
                silent:false,
                filter:function (event,player){
        return event.target==event.targets[event.targets.length-1]&&event.targets.length==player.hp;
    },
                content:function (){
        player.draw();
    },
            },
            "new_juejing":{
                audio:"ext:新•界限突破:true",
                mod:{
                    maxHandcard:function (player,num){
            return 2+num;
        },
                },
                trigger:{
                    player:["dying","dyingAfter"],
                },
                priority:6,
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "new_longhun":{
                group:["new_longhun1","new_longhun2","new_longhun3","new_longhun4","new_longhun_discard","new_longhun_add"],
                ai:{
                    skillTagFilter:function (player,tag){
            switch(tag){
                case 'respondSha':{
                    if(player.countCards('he',{suit:'diamond'})<1) return false;
                    break;
                }
                case 'respondShan':{
                    if(player.countCards('he',{suit:'club'})<1) return false;
                    break;
                }
                case 'save':{
                    if(player.countCards('he',{suit:'heart'})<1) return false;
                    break;
                }
            }
        },
                    maixie:true,
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    effect:{
                        target:function (card,player,target){
                if((get.tag(card,'damage')||get.tag(card,'loseHp'))&&target.hp==1) return [1,0.5];
            },
                    },
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            return 0.5;
        },
                },
            },
            "new_longhun1":{
                audio:"longhun1",
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '将至多两张张红桃牌当作桃使用';
    },
                position:"he",
                check:function (card,event){
        if(ui.selected.cards.length) return 0;
        return 10-get.value(card);
    },
                selectCard:[1,2],
                viewAs:{
                    name:"tao",
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'heart'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='heart';
    },
                ai:{
                    basic:{
                        order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                // if(player==target&&player.hp<=0) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "new_longhun2":{
                audio:"longhun2",
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '将至多两张方片牌当作火杀使用或打出';
    },
                position:"he",
                check:function (card,event){
        if(ui.selected.cards.length) return 0;
        return 10-get.value(card);
    },
                selectCard:[1,2],
                viewAs:{
                    name:"sha",
                    nature:"fire",
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                ai:{
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "new_longhun3":{
                audio:"longhun3",
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '将至多两张黑桃牌当作无懈可击使用';
    },
                position:"he",
                check:function (card,event){
        if(ui.selected.cards.length) return 0;
        return 7-get.value(card);
    },
                selectCard:[1,2],
                viewAs:{
                    name:"wuxie",
                },
                viewAsFilter:function (player){
        return player.countCards('he',{suit:'spade'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "new_longhun4":{
                audio:"longhun4",
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '将至多两张梅花牌当作闪打出';
    },
                position:"he",
                check:function (card,event){
        if(ui.selected.cards.length) return 0;
        return 10-get.value(card);
    },
                selectCard:[1,2],
                viewAs:{
                    name:"shan",
                },
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "new_longhun_discard":{
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                silent:true,
                popup:false,
                filter:function (event,player){
        if(!_status.currentPhase) return false;
        if(!['shan','wuxie'].contains(event.card.name)) return false;
        if(event.cards.length!=2) return false;
        return event.skill=='new_longhun3'||event.skill=='new_longhun4';
    },
                content:function (){
        player.discardPlayerCard(_status.currentPhase,'he');
    },
            },
            "new_longhun_add":{
                trigger:{
                    source:["damageBegin","recoverBegin"],
                },
                forced:true,
                silent:true,
                popup:false,
                filter:function (event,player){
        if(event.name=='damage'){
            if(event.card.name!='sha') return false;
            if(event.cards.length!=2) return false;
            for(var i=0;i<event.cards.length;i++){
                if(get.suit(event.cards[i])!='diamond') return false;
            }
            return true;
        }
        else if(event.name=='recover'){
            if(!event.card||!event.cards) return false;
            if(event.card.name!='tao') return false;
            if(event.cards.length!=2) return false;
            for(var i=0;i<event.cards.length;i++){
                if(get.suit(event.cards[i])!='heart') return false;
            }
            return true;
        }
        return false;
    },
                content:function (){
        trigger.num++;
    },
            },
            "new_jiangchi":{
                audio:"jiangchi",
                trigger:{
                    player:"phaseDrawEnd",
                },
                direct:true,
                content:function (){
        "step 0"
        var list=['弃牌','摸牌','取消'];
        if(!player.countCards('he')) list.remove('弃牌');
        player.chooseControl(list,function(){
            var player=_status.event.player;
            if(list.contains('弃牌')){
                if(player.countCards('h')>3&&player.countCards('h','sha')>1){
                    return '弃牌';
                }
                if(player.countCards('h','sha')>2){
                    return '弃牌';
                }
            }
            if(!player.countCards('h','sha')){
                return '摸牌';
            }
            return 'cancel2';
        }).set('prompt',get.prompt('new_jiangchi')).set('prompt2',get.translation('new_jiangchi_info'));
        "step 1"
        if(result.control=='弃牌'){
            player.chooseToDiscard(true,'he');
            player.addTempSkill('jiangchi2','phaseUseEnd');
            player.logSkill('new_jiangchi');
        }
        else if(result.control=='摸牌'){
            player.draw();
            player.addTempSkill('jiangchi3','phaseUseEnd');
            player.logSkill('new_jiangchi');
        }
    },
            },
        },
        translate:{
            "new_yajiao":"涯角",
            "new_yajiao_info":"每当你于回合外使用或打出牌时，你可以亮出牌堆顶的一张牌，并将其交给一名角色。若此牌与你此次使用或打出的牌类别不同，则你弃置一张牌。",
            "new_liyu":"利驭",
            "new_liyu_info":"当你使用【杀】对一名其他角色造成伤害后，你可以获得其一张牌。若此牌不为装备牌，则其摸一张牌。若此牌为装备牌，则视为你对其选择的另一名角色使用一张【决斗】。",
            "new_retuxi":"突袭",
            "new_retuxi_info":"摸牌阶段摸牌时，你可以少摸任意张牌，然后选择等量的角色的各一张手牌。",
            "new_reyiji":"遗计",
            "new_reyiji_info":"每当你受到1点伤害后，你可以摸两张牌，然后可以将至多两张手牌交给其他角色。",
            "new_rejianxiong":"奸雄",
            "new_rejianxiong_info":"每当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。",
            "new_reluoyi":"裸衣",
            "new_reluoyi_info":"你可以展示牌堆顶的三张牌。然后，你可以放弃摸牌。若如此做，你获得其中的基本牌、武器牌和【决斗】，若如此做，直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。否则，你弃置这些牌。",
            "new_rewusheng":"武圣",
            "new_rewusheng_info":"你可以将一张红色牌当做【杀】使用或打出。你使用的方片杀没有距离限制。",
            "new_yijue":"义绝",
            "new_yijue_info":"出牌阶段限一次，你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌。若此牌为黑色，则该角色不能使用或打出牌，非锁定技失效且受到来自你的红桃【杀】的伤害+1直到回合结束。若此牌为红色，则你可以获得此牌，并可以令其回复一点体力。",
            "new_yijue2":"义绝",
            "new_yijue2_info":"",
            "new_repaoxiao":"咆哮",
            "new_repaoxiao_info":"锁定技，出牌阶段，你使用【杀】没有数量限制。若你于此出牌阶段内使用过【杀】，则你本回合内使用【杀】没有距离限制。",
            "new_tishen":"替身",
            "new_tishen_info":"出牌阶段结束时，你可以弃置你所有的锦囊牌与坐骑牌。若如此做，直到你的下个回合开始，你获得所有以你为目标且未对你造成伤害的【杀】。",
            "new_tishen2":"替身",
            "new_tishen2_info":"",
            "new_qingjian":"清俭",
            "new_qingjian_info":"每当你于摸牌阶段外获得牌时，你可以展示任意张手牌并交给一名其他角色。然后，当前回合角色本回合的手牌上限+X。（X为你给出的牌中包含的类别数）",
            "qingjian_add":"清俭",
            "qingjian_add_info":"",
            "new_reqingnang":"青囊",
            "new_reqingnang_info":"出牌阶段，你可以弃置一张手牌，令一名本回合内未成为过〖青囊〗的目标的角色回复一点体力。若你弃置的是黑色牌，则你本回合内不能再发动〖青囊〗。",
            "new_reyaowu":"耀武",
            "new_reyaowu_info":"锁定技，当任意一名角色使用【杀】对你造成伤害时，若此杀为红色，该角色回复1点体力或摸一张牌。若为黑色，则你摸一张牌。",
            "new_rebiyue":"闭月",
            "new_rebiyue_info":"结束阶段，你可以摸一张牌，若你没有手牌，则改为摸两张牌",
            "new_reqicai":"奇才",
            "new_reqicai_info":"锁定技，你使用的锦囊牌没有距离限制，你装备区内的牌不能被弃置。",
            "new_fuhun":"父魂",
            "new_fuhun_info":"你可以将两张手牌当杀使用或打出；出牌阶段，若你以此法使用的杀造成了伤害，你获得技能〖武圣(界)〗、〖咆哮(界)〗直到回合结束。",
            "new_fuhun2":"父魂",
            "new_fuhun2_info":"",
            "new_zhengnan":"征南",
            "new_zhengnan_info":"当其他角色死亡后，你可以摸三张牌。若如此做，你获得下列技能中的任意一个：〖武圣(界)〗、 〖当先〗和〖制蛮〗。",
            "new_zhiji":"志继",
            "new_zhiji_info":"觉醒技，准备阶段，若你没有手牌，你须回复1点体力或摸两张牌，然后减1点体力上限，并永久获得技能〖观星(界)〗。",
            "new_rezhiheng":"制衡",
            "new_rezhiheng_info":"出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。若你在发动〖制衡〗时弃置了所有手牌，则你额外摸一张牌。",
            "new_rejiuyuan":"救援",
            "new_rejiuyuan_info":"主公技，其他吴国角色对自己使用【桃】时，如果其的体力值大于你，则其可以改为令你回复1点体力，然后其摸一张牌。",
            "new_rejiuyuan2":"救援",
            "new_rejiuyuan2_info":"",
            "new_rejieyin":"结姻",
            "new_rejieyin_info":"出牌阶段限一次，你可以选择一名男性角色并弃置一张手牌或将一张装备牌移动至其装备区。你与其体力较高的角色摸一张牌，体力值较低的角色回复1点体力",
            "new_baobian":"豹变",
            "new_baobian_info":"锁定技，若你的体力值为3或更少，你视为拥有技能〖挑衅〗；若你的体力值为2或更少；你视为拥有技能〖咆哮(界)〗；若你的体力值为1，你视为拥有技能〖神速〗。",
            "new_reluoshen":"洛神",
            "new_reluoshen_info":"准备阶段，你可以进行判定。你可以重复此流程，直到出现红色的判定牌。然后，你获得所有黑色的判定牌。你通过〖洛神〗获得的牌，不计入当前回合的手牌上限。",
            "new_reguanxing":"观星",
            "new_reguanxing_info":"准备阶段，你可以观看牌堆顶的5张牌（存活角色小于4时改为3张），并将其以任意顺序置于牌堆项或牌堆底，如果你把观星的牌都放在牌堆底，你可以在结束阶段再进行1次观星",
            "new_linglong":"玲珑",
            "new_linglong_info":"锁定技，若你的装备区没有防具牌，视为你装备着【八卦阵】；若你的装备区没有坐骑牌，你的手牌上限+1；若你的装备区没有宝物牌，则你视为拥有技能〖奇才(界)〗",
            "new_rejizhi":"集智",
            "new_rejizhi_info":"当你使用了一张非转化的非延时锦囊牌时，你可以摸一张牌。若此牌为基本牌，则你可以弃置之，使本回合手牌上限+1。",
            "new_xingwu":"星舞",
            "new_xingwu_info":"弃牌阶段开始时，你可以将一张手牌置于武将牌上，称之为「舞」。然后若你的「舞」中包含三种花色，则你须移去三张花色不同的「舞」并选择一名角色，该角色受到2点伤害(若为女性，则改为1点)并弃置其装备区的所有牌。",
            "new_luoyan":"落雁",
            "new_luoyan_info":"锁定技。若你的武将牌上有「舞」，则你视为拥有技能〖天香〗和〖流离〗。",
            "new_luoyan_tianxiang":"天香",
            "new_luoyan_tianxiang_info":"",
            "new_luoyan_liuli":"流离",
            "new_luoyan_liuli_info":"",
            "new_drlt_jueyan":"决堰",
            "new_drlt_jueyan_info":"出牌阶段限一次，你可以废除一个装备栏，然后执行对应一项：武器栏，本回合内你可以多使用三张【杀】；防具栏，摸三张牌，本回合手牌上限+3；2个坐骑栏，本回合你使用的牌无距离限制；宝物栏，本回合获得技能〖集智〗(界)",
            "new_meibu":"魅步",
            "new_meibu_info":"其他角色的出牌阶段开始时，若你在其攻击范围内，你可以弃置一张牌，令该角色于本回合内拥有“止息”。若你以此法弃置的牌不是【杀】或黑色锦囊牌，则本回合其与你距离视为1。",
            "new_mumu":"穆穆",
            "new_mumu_info":"出牌阶段开始时，你可以选择一项：1.弃置一名其他角色装备区里的一张牌；2.获得一名角色装备区里的一张防具牌，若如此做，你本回合不能使用【杀】。",
            "new_zhixi":"止息",
            "new_zhixi_info":"锁定技，出牌阶段，你至多可使用X张牌，你使用了锦囊牌后不能再使用牌（X为你的体力值）。",
            "new_mumu2":"穆穆",
            "new_mumu2_info":"锁定技，你不能使用【杀】。",
            "new_qingxian":"清弦",
            "new_qingxian_info":"出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）",
            "new_juexiang":"绝响",
            "new_juexiang_info":"锁定技，当你死亡时，杀死你的角色弃置装备区内的所有牌并失去1点体力。然后，你可以令一名其他角色获得技能〖残韵〗。若该角色区域内有梅花牌，则其可以弃置其中的一张，然后其获得技能〖绝响〗。",
            "new_canyun":"残韵",
            "new_canyun_info":"出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色（不能选择已经成为过〖残韵〗目标的角色）。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）",
            "qingxian_draw":"清弦",
            "qingxian_draw_info":"",
            "new_juejing":"绝境",
            "new_juejing_info":"锁定技，你的手牌上限+2。当你进入或脱离濒死状态时，你摸一张牌。",
            "new_longhun":"龙魂",
            "new_longhun_info":"你可以将同花色的至多两张牌按下列规则使用或打出：红桃当【桃】，方块当火属性的【杀】，梅花当【闪】，黑桃当【无懈可击】。若你以此法使用或打出了两张红色牌，则此牌的伤害值/回复值+1；若你以此法使用或打出了两张黑色牌，则你可以弃置当前回合角色的一张牌。",
            "new_longhun1":"龙魂♥️",
            "new_longhun1_info":"",
            "new_longhun2":"龙魂♦️",
            "new_longhun2_info":"",
            "new_longhun3":"龙魂♠️",
            "new_longhun3_info":"",
            "new_longhun4":"龙魂♣️",
            "new_longhun4_info":"",
            "new_longhun_discard":"龙魂",
            "new_longhun_discard_info":"",
            "new_longhun_add":"龙魂",
            "new_longhun_add_info":"",
            "new_jiangchi":"将驰",
            "new_jiangchi_info":"摸牌阶段结束时，你可以选择一项：1、摸一张牌，若如此做，你本回合内不能使用或打出【杀】。 2、弃置一张牌，若如此做，出牌阶段你使用【杀】无距离限制且你可以额外使用一张【杀】，直到回合结束。",
        },
    },
    intro:"◇《三国杀十周年》新服界限突破武将及各种修改武将的扩展。<br>◇原无名杀中已拥有的武将会直接替换原技能，新的武将会以扩展武将形式出现。所有包含「新版替换」的标准包武将都会还原为原版。",
    author:"苏婆玛丽奥",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["re_huangyueyingx.jpg","re_huaxiong.jpg","re_jikang.jpg","re_sunquan.jpg","re_sunshangxiang.jpg","re_diaochan.jpg","re_zhenji.jpg","re_zhugeliang.jpg"],"card":[],"skill":[]}}})
