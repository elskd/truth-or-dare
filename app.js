const cards=[
["truth",1,"Какое было твоё первое впечатление о партнёре?"],
["truth",1,"Что в партнёре ты заметил(а) первым?"],
["truth",1,"Когда ты впервые понял(а), что начинаешь влюбляться?"],
["truth",1,"Какая привычка партнёра тебя особенно умиляет?"],
["truth",1,"Какая фраза партнёра тебе особенно запомнилась?"],
["truth",1,"Что в партнёре оказалось совсем не таким, как ты ожидал(а)?"],
["truth",1,"Какой ваш момент ты вспоминаешь чаще всего?"],
["truth",1,"В какой момент с партнёром тебе было особенно весело?"],
["truth",1,"Что в партнёре кажется тебе самым милым?"],
["truth",1,"Какой ваш совместный вечер ты бы повторил(а)?"],
["truth",1,"Какая фотография партнёра тебе нравится больше всего?"],
["truth",1,"Что ты думал(а) о ваших отношениях после первой встречи?"],
["truth",1,"Что тебе в партнёре сначала было непонятно или непривычно?"],
["truth",1,"В какой момент ты понял(а), что между вами уже что-то серьёзное?"],
["truth",1,"Что ты хотел(а) сказать партнёру раньше, но не сказал(а)?"],
["dare",1,"Обними партнёра на 20 секунд."],
["dare",1,"Сделай партнёру комплимент, который никогда раньше не говорил(а)."],
["truth",1,"Что в ваших отношениях тебе сейчас кажется самым лёгким и приятным?"],
["truth",1,"Какой момент начала ваших отношений тебе хочется пережить ещё раз?"],
["truth",1,"Что тебе особенно нравится в том, как вы проводите время вместе?"],

["truth",2,"Что ты больше всего ценишь в ваших отношениях?"],
["truth",2,"Чего тебе сейчас не хватает в отношениях?"],
["truth",2,"В чём вы с партнёром больше всего похожи?"],
["truth",2,"В чём вы максимально разные?"],
["truth",2,"Что ты боишься потерять в ваших отношениях?"],
["truth",2,"Когда рядом с партнёром ты чувствуешь себя наиболее спокойно?"],
["truth",2,"Что партнёр делает такого, из-за чего ты чувствуешь себя любимым(ой)?"],
["truth",2,"Что тебе сложно говорить партнёру напрямую?"],
["truth",2,"Как ты понимаешь, что человек действительно тебя любит?"],
["truth",2,"Что ты хотел(а) бы изменить в ваших отношениях?"],
["truth",2,"Какая черта партнёра тебе нравится больше всего?"],
["truth",2,"За что ты особенно благодарен(на) партнёру?"],
["truth",2,"Что тебе хочется делать вместе чаще?"],
["truth",2,"Что ты хочешь, чтобы стало лучше в ваших отношениях в ближайший год?"],
["truth",2,"Что для тебя является настоящим проявлением верности?"],
["truth",2,"Что тебе важнее получать от партнёра: внимание, заботу или свободу? Почему?"],
["truth",2,"Что помогает тебе чувствовать себя желанным(ой) в отношениях?"],
["truth",2,"Какой совместный опыт ты больше всего хочешь попробовать в будущем?"],
["dare",2,"Скажи партнёру три вещи, за которые ты его/её ценишь."],
["dare",2,"Обними партнёра так, будто вы не виделись месяц."],

["truth",3,"Что в ваших отношениях тебя сейчас беспокоит, но тебе сложно об этом заговорить?"],
["truth",3,"Есть ли что-то, о чём ты боишься сказать партнёру из-за его/её реакции?"],
["truth",3,"В какой момент ваших отношений ты чувствовал(а) себя наиболее неуверенно?"],
["truth",3,"Есть ли у тебя страх насчёт ваших отношений, который ты обычно не показываешь?"],
["truth",3,"Что ты хотел(а) бы изменить в том, как вы общаетесь во время конфликтов?"],
["truth",3,"Есть ли что-то после истории с изменой, что ты до сих пор переживаешь или о чём тебе сложно говорить?"],
["truth",3,"Что тебе нужно от партнёра, чтобы чувствовать больше доверия и спокойствия?"],
["truth",3,"Есть ли что-то, за что ты до сих пор злишься на партнёра, хотя внешне всё нормально?"],
["truth",3,"Что ты хотел(а) бы, чтобы партнёр лучше понимал о твоих чувствах?"],
["truth",3,"Что ты сам(а) хотел(а) бы делать по-другому в этих отношениях?"],
["truth",3,"Что для тебя является самым болезненным в ссорах?"],
["truth",3,"Когда ты чувствуешь, что партнёр действительно слышит тебя?"],
["truth",3,"Что тебе сложнее всего попросить у партнёра?"],
["truth",3,"Как ты понимаешь, что снова можешь полностью доверять человеку после боли?"],
["truth",3,"Есть ли тема, которую ты давно хочешь обсудить, но всё откладываешь?"],
["truth",3,"Что тебе хотелось бы услышать от партнёра после серьёзной ссоры?"],
["truth",3,"Что ты никогда не хочешь потерять между вами, даже если отношения будут меняться?"],
["dare",3,"Обними партнёра и скажи одну вещь, которую ты хочешь сохранить между вами."],
["dare",3,"Смотри партнёру в глаза 30 секунд и ничего не говори."],
["truth",3,"Что во внешности или поведении партнёра сильнее всего тебя притягивает?"],

["truth",4,"Какое твоё сильное желание в отношениях ты пока не решался(лась) озвучить?"],
["truth",4,"Есть ли что-то, чего тебе хочется от партнёра больше, но ты боишься показаться требовательным(ой)?"],
["truth",4,"Что тебе хочется получать от партнёра чаще?"],
["truth",4,"Что тебе хочется давать партнёру чаще?"],
["truth",4,"Как ты понимаешь, что действительно доверяешь человеку?"],
["truth",4,"Есть ли у тебя фантазия, которую ты никогда никому не рассказывал(а)?"],
["truth",4,"Что тебе хотелось бы попробовать с партнёром, но ты не знаешь, как предложить?"],
["truth",4,"Что для тебя означает идеальная интимная близость?"],
["truth",4,"Какой формат интимной близости тебе хочется попробовать вместе?"],
["truth",4,"Какой жест, взгляд или прикосновение партнёра сильнее всего тебя привлекает?"],
["truth",4,"Что помогает тебе полностью расслабиться рядом с партнёром?"],
["truth",4,"Что для тебя важнее во время близости: чувствовать себя желанным(ой) или любимым(ой)?"],
["truth",4,"Что может моментально усилить твоё желание?"],
["truth",4,"Что, наоборот, моментально его убивает?"],
["truth",4,"Как тебе проще всего показать партнёру, что ты его/её хочешь?"],
["truth",4,"Что тебе хотелось бы чаще слышать от партнёра во время флирта?"],
["dare",4,"Назови три вещи в партнёре, которые сильнее всего тебя привлекают."],
["dare",4,"Скажи партнёру на ухо комплимент, который давно хотел(а) сказать."],
["dare",4,"Поцелуй партнёра так, как тебе хочется прямо сейчас."],
["dare",4,"Выбери одно нежное прикосновение, которое хочешь получить прямо сейчас."],

["truth",5,"Расскажи о своём самом сокровенном сексуальном желании, которым готов(а) поделиться."],
["truth",5,"Какой момент между вами сильнее всего тебя возбуждал?"],
["truth",5,"Какой формат интимной близости тебе больше всего хочется попробовать вместе?"],
["truth",5,"Что ты больше всего хочешь получать от партнёра во время интимной близости?"],
["truth",5,"Назови три вещи, которые сильнее всего тебя возбуждают в партнёре."],
["truth",5,"Какая часть прелюдии тебе нравится больше всего?"],
["truth",5,"Какую свою фантазию ты был(а) бы готов(а) однажды воплотить вместе?"],
["truth",5,"Что партнёр может сделать, чтобы ты моментально почувствовал(а) себя желанным(ой)?"],
["truth",5,"Какой поцелуй или вид прикосновения тебе хочется получить прямо сейчас?"],
["truth",5,"Что тебе хотелось бы попробовать этой ночью, если оба этого захотите?"],
["dare",5,"Закрой глаза и позволь партнёру выбрать одно нежное прикосновение."],
["dare",5,"Партнёр выбирает место, куда хочет получить от тебя поцелуй."],
["dare",5,"Скажи партнёру одну вещь, которую очень хочешь попробовать вместе."],
["dare",5,"Поцелуй партнёра так, как тебе хочется прямо сейчас."],
["dare",5,"Скажи партнёру на ухо одну сексуальную мысль, которая когда-либо приходила тебе в голову о нём/ней."],
["dare",5,"Опиши словами свою идеальную интимную сцену с партнёром."],
["dare",5,"Назови одну вещь, которую хочешь сделать партнёру прямо сейчас."],
["dare",5,"Выбери: долгий поцелуй или объятие. Сделайте выбранное."],
["dare",5,"Скажи партнёру то, чего тебе хочется от него/неё прямо сейчас."],
["dare",5,"Финал: если бы сегодня можно было исполнить одно взаимное желание, что бы ты выбрал(а)?"],

["wild",5,"Скажи честно, чего тебе сейчас больше всего хочется от партнёра."],
["wild",5,"Скажи одну сексуальную мысль, которая когда-либо приходила тебе в голову о партнёре."],
["wild",5,"Опиши словами свою идеальную интимную сцену с партнёром."],
["wild",5,"Партнёр выбирает: поцелуй или объятие."],
["wild",5,"Назови три вещи, которые сильнее всего тебя возбуждают в партнёре."],
["wild",5,"Партнёр называет место, куда хочет получить поцелуй."],
["wild",5,"В течение следующего раунда партнёр выбирает ваше романтическое или интимное действие."],
["wild",5,"Скажи то, чего тебе хочется от партнёра прямо сейчас."],
["wild",5,"Закрой глаза и позволь партнёру выбрать одно нежное прикосновение."],
["wild",5,"Финал: если бы сегодня можно было исполнить одно желание между вами, что бы ты выбрал(а)?"]
];

const state={view:"home",players:["Никита","Эля"],playerGenders:["male","female"],mode:"classic",count:25,turn:0,played:0,deck:[],current:null};

const $=id=>document.getElementById(id);


function show(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $(id).classList.add("active");
  state.view=id.replace("View","");
}

function renderPlayers(){
  const list=$("playersList");
  list.innerHTML="";
  state.players.forEach((name,i)=>{
    if(!state.playerGenders[i])state.playerGenders[i]="female";
    const row=document.createElement("div");
    row.className="player-row";
    row.innerHTML=
      '<span class="player-number">'+(i+1)+'.</span>'+
      '<input class="name-input" type="text" maxlength="24" autocomplete="off" value="'+String(name).replace(/"/g,"&quot;")+'" placeholder="ИМЯ ИГРОКА">'+
      (i>1?'<button class="remove-player" aria-label="Удалить">×</button>':'<span class="remove-placeholder"></span>')+
      '<select class="gender-select" aria-label="Пол игрока">'+
        '<option value="female" '+(state.playerGenders[i]==="female"?"selected":"")+'>Ж</option>'+
        '<option value="male" '+(state.playerGenders[i]==="male"?"selected":"")+'>М</option>'+
      '</select>';
    row.querySelector(".name-input").addEventListener("input",e=>{
      state.players[i]=e.target.value;
    });
    row.querySelector(".gender-select").addEventListener("change",e=>{
      state.playerGenders[i]=e.target.value;
    });
    const remove=row.querySelector(".remove-player");
    if(remove)remove.onclick=()=>{
      state.players.splice(i,1);
      state.playerGenders.splice(i,1);
      renderPlayers();
    };
    list.appendChild(row);
  });
  $("playerCount").textContent=state.players.length;
}

function setupDeck(){
  state.deck=getActiveQuestions()
    .filter(q=>q.text.trim() && q.modes.includes(state.mode))
    .map(q=>({
      type:q.type,
      level:Number(q.level),
      text:q.text,
      gender:q.gender||"both",
      weight:(q.weights&&q.weights[state.mode])||1,
      order:getQuestionOrder(q,state.mode),
      used:false
    }))
    .sort((a,b)=>a.level-b.level||a.order-b.order);
  state.played=0;
  state.turn=0;
  state.current=null;
  state.currentLevel=1;
}

function validPlayers(){
  return state.players.length>=2 && state.players.every(p=>p.trim());
}

function openTurn(){
  if(state.played>=state.count){finish();return}
  show("turnView");
  $("turnPlayer").textContent=state.players[state.turn%state.players.length];
  $("turnNumber").textContent=String(state.played+1);
}

function getQuestionOrder(q,mode){const n=Number(q.order&&q.order[mode]);return Number.isFinite(n)?n:999999;}
function normalizeQuestionOrder(bank){ADMIN_MODES.forEach(([mode])=>{for(let level=1;level<=5;level++){const list=bank.filter(q=>Number(q.level)===level&&q.modes?.includes(mode)).sort((x,y)=>getQuestionOrder(x,mode)-getQuestionOrder(y,mode)||Number(x.id)-Number(y.id));list.forEach((q,i)=>{if(!q.order)q.order={};q.order[mode]=i+1});}});return bank;}
function weightedPick(items){
  const guaranteed=items.filter(q=>q.weight==="guaranteed" || Number(q.weight)===999999);
  if(guaranteed.length)return guaranteed[Math.floor(Math.random()*guaranteed.length)];
  const total=items.reduce((sum,q)=>sum+Math.max(1,Number(q.weight)||1),0);
  let roll=Math.random()*total;
  for(const q of items){
    roll-=Math.max(1,q.weight||1);
    if(roll<=0)return q;
  }
  return items[items.length-1];
}

function pick(choice){
  const remaining=state.deck.filter(c=>!c.used);
  if(!remaining.length){finish();return;}

  const playerGender=state.playerGenders[state.turn%state.players.length]||"female";
  const eligible=remaining.filter(c=>
    c.gender==="both" || c.gender===playerGender
  );
  if(!eligible.length){finish();return;}

  const currentLevel=Math.min(...eligible.map(c=>c.level));
  state.currentLevel=currentLevel;

  let pool=eligible.filter(c=>c.level===currentLevel);
  if(choice==="truth" || choice==="dare"){
    const typed=pool.filter(c=>c.type===choice);
    if(!typed.length){
      const typedAnyLevel=eligible.filter(c=>c.type===choice);
      if(typedAnyLevel.length) pool=typedAnyLevel;
    }else{
      pool=typed;
    }
  }

  const next=weightedPick(pool);
  next.used=true;
  state.current=next;

  $("questionPlayer").textContent=state.players[state.turn%state.players.length];
  $("questionProgress").textContent=String(state.played+1).padStart(2,"0")+" / "+state.count;
  $("questionLevel").textContent="УРОВЕНЬ "+next.level;
  $("questionType").textContent=next.type==="truth"?"ПРАВДА":"ДЕЙСТВИЕ";
  $("questionText").textContent=next.text;
  show("questionView");
}


function nextQuestion(){
  state.played++;
  state.turn++;
  if(state.played>=state.count){finish();return}
  openTurn();
}

function replaceQuestion(){
  if(state.current)state.current[4]=false;
  pick("random");
}

function finish(){
  show("finishView");
  $("finishText").textContent=modeNames[state.mode]+" · "+state.count+" вопросов";
}

$("startSetup").onclick=()=>{
  if(!validPlayers()){
    const firstEmpty=state.players.findIndex(p=>!p.trim());
    if(firstEmpty>=0){
      const input=$("playersList").querySelectorAll(".name-input")[firstEmpty];
      input.focus();
    }
    return;
  }
  show("setupView");
};

$("settingsTop").onclick=()=>show("settingsView");
const THEME_KEY="truthDareTheme";
function applyTheme(theme){
  const value=theme==="light"?"light":"dark";
  document.body.classList.toggle("light-theme",value==="light");
  localStorage.setItem(THEME_KEY,value);
  document.querySelectorAll(".theme-card").forEach(b=>b.classList.toggle("active",b.dataset.theme===value));
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute("content",value==="light"?"#f7f5f0":"#090909");
}
applyTheme(localStorage.getItem(THEME_KEY)||"dark");
$("settingsBack").onclick=()=>show("homeView");
$("appearanceEntry").onclick=()=>show("appearanceView");
$("appearanceBack").onclick=()=>show("settingsView");
document.querySelectorAll(".theme-card").forEach(b=>b.onclick=()=>applyTheme(b.dataset.theme));
$("setupBack").onclick=()=>show("homeView");
$("rulesBack").onclick=()=>show("setupView");
$("rulesStart").onclick=()=>openTurn();
$("turnBack").onclick=()=>show("setupView");
$("questionBack").onclick=()=>openTurn();

const launchGameButton=$("launchGame");
if(launchGameButton){
  launchGameButton.onclick=()=>{
    if(!validPlayers())return;
    const activeMode=document.querySelector(".mode-card.active");
    const activeCount=document.querySelector(".count-btn.active");
    if(activeMode)state.mode=activeMode.dataset.mode;
    if(activeCount)state.count=Number(activeCount.dataset.count);
    setupDeck();
    show("rulesView");
  };
}

if(document.querySelectorAll(".mode-card").length)document.querySelectorAll(".mode-card").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".mode-card").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
});

if(document.querySelectorAll(".count-btn").length)document.querySelectorAll(".count-btn").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".count-btn").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
});

document.querySelectorAll(".choice-card").forEach(b=>b.onclick=()=>pick(b.dataset.choice));
$("nextQuestion").onclick=nextQuestion;
$("replaceBtn").onclick=replaceQuestion;
$("againBtn").onclick=()=>{setupDeck();openTurn()};
$("addPlayer").onclick=()=>{
  if(state.players.length<4){
    state.players.push("");
    state.playerGenders.push("female");
    renderPlayers();
    const inputs=$("playersList").querySelectorAll(".name-input");
    inputs[inputs.length-1].focus();
  }
};

renderPlayers();

setTimeout(()=>{
  $("loader").classList.add("hidden");
  show("homeView");
},1500);

/* SHARED QUESTION BANK + ADMIN */
const QUESTION_BANK_KEY="truthDareQuestionBankSharedV2";
const OLD_QUESTION_BANK_KEY="truthDareQuestionBanksV1";
const ADMIN_MODES=[
  ["classic","Микс"],["spicy","Веселье"],["wild","Романтика"],["inferno","18+"]
];
const modeNames={classic:"Микс",spicy:"Веселье",wild:"Романтика",inferno:"18+"};
let adminMode="classic";
let adminLevel=1;

function makeDefaultQuestionBank(){
  return cards.map((c,i)=>({
    id:i,
    type:c[0],
    level:Number(c[1]),
    gender:"both",
    text:c[2],
    modes:["classic","spicy","wild","inferno"],
    weights:{classic:1,spicy:1,wild:1,inferno:1}
  }));
}

function migrateQuestionBank(){
  try{
    const shared=JSON.parse(localStorage.getItem(QUESTION_BANK_KEY)||"null");
    if(Array.isArray(shared) && shared.length>0){
      const normalized=shared
        .filter(q=>q && String(q.text||"").trim())
        .map((q,i)=>({
          id:Number.isFinite(Number(q.id))?Number(q.id):i,
          type:q.type==="dare"?"dare":"truth",
          level:Math.min(5,Math.max(1,Number(q.level)||1)),
          gender:["both","female","male"].includes(q.gender)?q.gender:"both",
          text:String(q.text||"").trim(),
          modes:Array.isArray(q.modes)&&q.modes.length?q.modes.filter(m=>ADMIN_MODES.some(([id])=>id===m)):ADMIN_MODES.map(([id])=>id),
          weights:{
            classic:Number(q.weights?.classic)||1,
            spicy:Number(q.weights?.spicy)||1,
            wild:Number(q.weights?.wild)||1,
            inferno:Number(q.weights?.inferno)||1
          }
        }));
      if(normalized.length>0){
        const hasQuestionsForMode=ADMIN_MODES.every(([mode])=>
          normalized.some(q=>Array.isArray(q.modes) && q.modes.includes(mode))
        );
        if(hasQuestionsForMode){
          localStorage.setItem(QUESTION_BANK_KEY,JSON.stringify(normalized));
          return normalized;
        }
        const defaults=makeDefaultQuestionBank();
        const byKey=new Map(normalized.map(q=>[
          [q.type,q.level,q.gender,q.text].join("|"),q
        ]));
        defaults.forEach(def=>{
          const key=[def.type,def.level,def.gender,def.text].join("|");
          if(!byKey.has(key))normalized.push(def);
        });
        localStorage.setItem(QUESTION_BANK_KEY,JSON.stringify(normalized));
        return normalized;
      }
    }

    const old=JSON.parse(localStorage.getItem(OLD_QUESTION_BANK_KEY)||"null");
    if(old && ADMIN_MODES.every(([m])=>Array.isArray(old[m]))){
      const map=new Map();
      let nextId=0;
      ADMIN_MODES.forEach(([mode])=>{
        old[mode].forEach(q=>{
          const normalized={
            type:q.type==="dare"?"dare":"truth",
            level:Math.min(5,Math.max(1,Number(q.level)||1)),
            gender:["both","female","male"].includes(q.gender)?q.gender:"both",
            text:String(q.text||"").trim()
          };
          if(!normalized.text)return;
          const key=[normalized.type,normalized.level,normalized.gender,normalized.text].join("|");
          let existing=map.get(key);
          if(!existing){
            existing={
              id:nextId++,
              type:normalized.type,
              level:normalized.level,
              gender:normalized.gender,
              text:normalized.text,
              modes:[],
              weights:{classic:1,spicy:1,wild:1,inferno:1}
            };
            map.set(key,existing);
          }
          if(!existing.modes.includes(mode))existing.modes.push(mode);
        });
      });
      const migrated=[...map.values()];
      if(migrated.length>0){
        localStorage.setItem(QUESTION_BANK_KEY,JSON.stringify(migrated));
        return migrated;
      }
    }
  }catch(e){}
  const defaults=makeDefaultQuestionBank();
  localStorage.setItem(QUESTION_BANK_KEY,JSON.stringify(defaults));
  return defaults;
}

let questionBank=migrateQuestionBank();

function saveQuestionBank(){
  localStorage.setItem(QUESTION_BANK_KEY,JSON.stringify(questionBank));
}

function escapeHtml(value){
  return String(value??"")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function repairDefaultQuestions(){
  const defaults=makeDefaultQuestionBank();
  let changed=false;

  [1,2,3,4,5].forEach(level=>{
    ADMIN_MODES.forEach(([mode])=>{
      const hasLevelMode=questionBank.some(q=>
        Number(q.level)===level &&
        Array.isArray(q.modes) &&
        q.modes.includes(mode) &&
        String(q.text||"").trim()
      );
      if(!hasLevelMode){
        defaults
          .filter(q=>q.level===level)
          .forEach(def=>{
            const existing=questionBank.find(q=>
              q.type===def.type &&
              Number(q.level)===def.level &&
              String(q.text||"").trim()===def.text
            );
            if(existing){
              if(!Array.isArray(existing.modes))existing.modes=[];
              if(!existing.modes.includes(mode))existing.modes.push(mode);
              if(!existing.weights)existing.weights={classic:1,spicy:1,wild:1,inferno:1};
              if(!existing.weights[mode])existing.weights[mode]=1;
            }else{
              questionBank.push({...def});
            }
            changed=true;
          });
      }
    });
  });

  if(changed)saveQuestionBank();
}

repairDefaultQuestions();

function getActiveQuestions(){
  return questionBank;
}

function getNextQuestionId(){
  return questionBank.reduce((max,q)=>Math.max(max,Number(q.id)||0),-1)+1;
}


const initAdminNavigation=()=>{
  const entry=$("adminEntry");
  const back=$("adminBack");
  if(entry){
    entry.onclick=()=>{
      show("adminView");
      try{ renderAdmin(); }catch(err){ console.error("Admin render error:",err); }
    };
  }
  if(back){
    back.onclick=()=>show("settingsView");
  }
};
initAdminNavigation();function renderAdmin(){
  const modeGrid=$("adminModeGrid");
  const levelGrid=$("adminLevelGrid");
  const list=$("adminList");

  modeGrid.style.display="";
  modeGrid.innerHTML=ADMIN_MODES.map(([id,name])=>
    '<button class="admin-tab '+(id===adminMode?"active":"")+'" data-admin-mode="'+id+'">'+name+'</button>'
  ).join("");

  levelGrid.innerHTML=[1,2,3,4,5].map(level=>
    '<button class="admin-tab '+(level===adminLevel?"active":"")+'" data-admin-level="'+level+'">Уровень '+level+'</button>'
  ).join("");

  const modeChecks=ADMIN_MODES.map(([id,name])=>
    '<label class="admin-check"><input type="checkbox" value="'+id+'" checked> <span>'+name+'</span></label>'
  ).join("");

  list.innerHTML='<div class="admin-add"><div class="admin-add-title">Добавить вопрос</div><div class="admin-check-grid">'+modeChecks+'</div>'+
    '<select id="adminAddLevel" class="admin-select">'+[1,2,3,4,5].map(level=>'<option value="'+level+'" '+(level===adminLevel?"selected":"")+'>Уровень '+level+'</option>').join("")+'</select>'+
    '<select id="adminAddType" class="admin-select"><option value="truth">Правда</option><option value="dare">Действие</option></select>'+
    '<select id="adminAddGender" class="admin-select"><option value="both" selected>Для обоих</option><option value="female">Для девушек</option><option value="male">Для парней</option></select>'+
    '<textarea id="adminNewQuestion" class="admin-new-text" placeholder="Напиши новый вопрос..."></textarea>'+
    '<button class="admin-save admin-add-btn" id="adminAddQuestion">Добавить вопрос</button></div>';

  const questions=questionBank.filter(q=>Number(q.level)===adminLevel && q.modes.includes(adminMode)).sort((a,b)=>getQuestionOrder(a,adminMode)-getQuestionOrder(b,adminMode)||Number(a.id)-Number(b.id));

  list.innerHTML+=questions.map((q,index)=>{
    const selectedWeight=q.weights?.[adminMode]??1;
    return '<div class="admin-card" draggable="true" data-drag-id="'+q.id+'"><div class="admin-card-head"><span class="admin-card-num">Вопрос '+(index+1)+'</span><span class="admin-order-buttons"><button type="button" class="admin-order-btn" data-move-up="'+q.id+'">↑</button><button type="button" class="admin-order-btn" data-move-down="'+q.id+'">↓</button></span><span class="admin-card-type">'+(q.type==="truth"?"Правда":"Действие")+'</span></div>'+
      '<div class="admin-card-label">Режимы</div><div class="admin-check-grid question-modes">'+
      ADMIN_MODES.map(([id,name])=>'<label class="admin-check"><input type="checkbox" data-mode-toggle="'+id+'" data-question="'+q.id+'" '+(q.modes.includes(id)?"checked":"")+'><span>'+name+'</span></label>').join("")+
      '</div><div class="admin-card-label">Вес в режиме '+modeNames[adminMode]+'</div>'+
      '<select class="admin-select" data-weight-id="'+q.id+'"><option value="1" '+(selectedWeight===1?"selected":"")+'>1 · обычный</option><option value="2" '+(selectedWeight===2?"selected":"")+'>2 · чаще</option><option value="3" '+(selectedWeight===3?"selected":"")+'>3 · сильно чаще</option><option value="4" '+(selectedWeight===4?"selected":"")+'>4 · очень часто</option><option value="guaranteed" '+(selectedWeight==="guaranteed"?"selected":"")+'>Обязательно · выпадет</option></select>'+
      '<select class="admin-select admin-question-gender" data-gender-id="'+q.id+'"><option value="both" '+((q.gender||"both")==="both"?"selected":"")+'>Для обоих</option><option value="female" '+(q.gender==="female"?"selected":"")+'>Для девушек</option><option value="male" '+(q.gender==="male"?"selected":"")+'>Для парней</option></select>'+
      '<textarea data-question-id="'+q.id+'">'+escapeHtml(q.text)+'</textarea><div class="admin-actions"><button class="admin-save" data-save-id="'+q.id+'">Сохранить</button><button class="admin-delete" data-delete-id="'+q.id+'">Удалить</button></div></div>';
  }).join("")||'<div class="admin-note">В этом уровне пока нет вопросов.</div>';

  modeGrid.querySelectorAll("[data-admin-mode]").forEach(b=>b.onclick=()=>{adminMode=b.dataset.adminMode;renderAdmin()});
  levelGrid.querySelectorAll("[data-admin-level]").forEach(b=>b.onclick=()=>{adminLevel=Number(b.dataset.adminLevel);renderAdmin()});

  $("adminAddQuestion").onclick=()=>{
    const text=$("adminNewQuestion").value.trim(), level=Number($("adminAddLevel").value), type=$("adminAddType").value, gender=$("adminAddGender").value;
    const modes=ADMIN_MODES.filter(([id])=>list.querySelector('.admin-check input[value="'+id+'"]')?.checked).map(([id])=>id);
    if(!text||!modes.length){$("adminNewQuestion").focus();return}
    questionBank.push({id:getNextQuestionId(),type,level,gender,text,modes,weights:{classic:1,spicy:1,wild:1,inferno:1},order:{classic:999999,spicy:999999,wild:999999,inferno:999999}});
    normalizeQuestionOrder(questionBank);saveQuestionBank();adminMode=modes[0];adminLevel=level;renderAdmin();
  };

  list.querySelectorAll("[data-mode-toggle][data-question]").forEach(input=>input.onchange=()=>{
    const q=questionBank.find(x=>x.id===Number(input.dataset.question));if(!q)return;
    const mode=input.dataset.modeToggle;
    if(input.checked){if(!q.modes.includes(mode))q.modes.push(mode);if(!q.weights)q.weights={classic:1,spicy:1,wild:1,inferno:1};if(!q.weights[mode])q.weights[mode]=1}
    else{q.modes=q.modes.filter(x=>x!==mode);if(!q.modes.length){input.checked=true;return}}
    normalizeQuestionOrder(questionBank);saveQuestionBank();renderAdmin();
  });

  let draggedId=null;
  let draggedCard=null;
  let lastTarget=null;

  const finishReorder=()=>{
    if(!draggedId)return;
    const cards=[...list.querySelectorAll("[data-drag-id]")];
    const orderedIds=cards.map(card=>Number(card.dataset.dragId));
    const items=questionBank.filter(q=>Number(q.level)===adminLevel&&q.modes.includes(adminMode));
    orderedIds.forEach((id,i)=>{
      const q=items.find(x=>x.id===id);
      if(q){if(!q.order)q.order={};q.order[adminMode]=i+1;}
    });
    normalizeQuestionOrder(questionBank);
    saveQuestionBank();
    if(draggedCard)draggedCard.classList.remove("dragging");
    draggedId=null;draggedCard=null;lastTarget=null;
    renderAdmin();
  };

  list.querySelectorAll("[data-drag-id]").forEach(card=>{
    const handle=card.querySelector(".admin-drag");
    if(!handle)return;
    handle.onpointerdown=e=>{
      e.preventDefault();
      e.stopPropagation();
      draggedId=Number(card.dataset.dragId);
      draggedCard=card;
      lastTarget=null;
      card.classList.add("dragging");
      handle.setPointerCapture?.(e.pointerId);
    };
    handle.onpointermove=e=>{
      if(!draggedCard||draggedCard!==card)return;
      e.preventDefault();
      const target=document.elementFromPoint(e.clientX,e.clientY)?.closest("[data-drag-id]");
      if(!target||target===draggedCard||target.parentElement!==list)return;
      if(target===lastTarget)return;
      lastTarget=target;
      const rect=target.getBoundingClientRect();
      const insertAfter=e.clientY>rect.top+rect.height/2;
      if(insertAfter)target.after(draggedCard);
      else target.before(draggedCard);
    };
    handle.onpointerup=e=>{
      e.preventDefault();
      e.stopPropagation();
      if(draggedCard===card){
        try{handle.releasePointerCapture?.(e.pointerId)}catch(_){}
        finishReorder();
      }
    };
    handle.onpointercancel=()=>{
      if(draggedCard===card){
        card.classList.remove("dragging");
        draggedId=null;draggedCard=null;lastTarget=null;
        renderAdmin();
      }
    };
  });

  const moveQuestion=(id,direction)=>{
    const items=questionBank.filter(q=>Number(q.level)===adminLevel&&q.modes.includes(adminMode))
      .sort((x,y)=>getQuestionOrder(x,adminMode)-getQuestionOrder(y,adminMode)||Number(x.id)-Number(y.id));
    const index=items.findIndex(q=>q.id===id);
    const target=index+direction;
    if(index<0||target<0||target>=items.length)return;
    [items[index],items[target]]=[items[target],items[index]];
    items.forEach((q,i)=>{if(!q.order)q.order={};q.order[adminMode]=i+1});
    saveQuestionBank();
    renderAdmin();
  };
  list.querySelectorAll("[data-move-up]").forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();moveQuestion(Number(b.dataset.moveUp),-1)});
  list.querySelectorAll("[data-move-down]").forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();moveQuestion(Number(b.dataset.moveDown),1)});

  list.querySelectorAll("[data-save-id]").forEach(b=>b.onclick=()=>{
    const id=Number(b.dataset.saveId), area=list.querySelector('textarea[data-question-id="'+id+'"]'), q=questionBank.find(x=>x.id===id);
    const genderSelect=list.querySelector('[data-gender-id="'+id+'"]'), weightSelect=list.querySelector('[data-weight-id="'+id+'"]');
    if(q&&area){q.text=area.value.trim();q.gender=genderSelect?genderSelect.value:"both";if(!q.weights)q.weights={classic:1,spicy:1,wild:1,inferno:1};q.weights[adminMode]=weightSelect?(weightSelect.value==="guaranteed"?"guaranteed":Number(weightSelect.value)):1;saveQuestionBank();b.textContent="Сохранено";setTimeout(()=>b.textContent="Сохранить",900)}
  });
}