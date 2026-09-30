const personas = {
  chief: {name:'Chief',face:'(◠‿◠)',color:'pink',role:'Your team coordinator',user:'Help me turn this research into a clear project brief',reply:'I’ll ask Nova to review the sources, then Kit can shape the brief. What decision should this help your team make?',handoff:'Nova → Research & source review',task:'Prepare a project brief',description:'Review the evidence, capture open questions, and produce a brief for a human decision',about:'Coordinate the team and keep the objective clear'},
  nova: {name:'Nova',face:'(⌐■_■)',color:'purple',role:'Your research specialist',user:'Which parts of this research can we rely on?',reply:'I’ll compare the sources and separate evidence from assumptions. I’ll keep the unresolved questions visible in the brief',handoff:'Research → Sources & open questions',task:'Review the research sources',description:'Compare the evidence, capture source links, and highlight questions that need a human decision',about:'Investigate carefully and keep the evidence within reach'},
  kit: {name:'Kit',face:'(ᵔᴥᵔ)',color:'green',role:'Your making-things specialist',user:'Shape these findings into a brief we can review',reply:'I’ll turn the findings into a clear document: the objective, the evidence, and the next decision. The draft will sit beside our conversation',handoff:'Workspace → Project brief',task:'Draft the project brief',description:'Turn the reviewed findings into a document that makes the next decision clear',about:'Turn well-defined ideas into useful, reviewable work'}
};
// Keep concept 1 intact; the selected direction uses the named Sapi team.
if (document.body.classList.contains('playful')) {
  const names = {Chief:'SapiTheChief', Nova:'Curio', Kit:'Buildly'};
  Object.values(personas).forEach(person => {
    Object.keys(person).forEach(key => {
      person[key] = person[key].replace(/\b(Chief|Nova|Kit)\b/g, name => names[name]);
    });
  });
  personas.nova.role = 'Initiative master';
  personas.nova.about = 'Measure, question, and improve what humans may miss';
  personas.kit.role = 'The maker';
}
document.querySelectorAll('[data-demo]').forEach(demo => {
  const setText=(selector,value)=>demo.querySelector(selector).textContent=value;
  demo.querySelectorAll('[data-agent]').forEach(button=>button.addEventListener('click',()=>{
    const person=personas[button.dataset.agent];
    demo.querySelectorAll('[data-agent]').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
    const face=demo.querySelector('[data-heading-face]');face.textContent=person.face;face.className='face '+person.color;
    setText('[data-agent-name]',person.name);setText('[data-agent-role]',person.role);setText('[data-user-message]',person.user);setText('[data-sender]',person.name+' · '+person.face);setText('[data-reply]',person.reply);setText('[data-handoff]',person.handoff);setText('[data-task-title]',person.task);setText('[data-task-description]',person.description);setText('[data-task-owner]','Assigned to '+person.name);setText('[data-note-title]',person.name+'’s working knowledge');setText('[data-note-about]',person.about);
  }));
  const tabs=[...demo.querySelectorAll('[data-tab]')];
  function selectTab(button){tabs.forEach(tab=>{const selected=tab===button;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;demo.querySelector('#panel-'+tab.dataset.tab).hidden=!selected;});}
  tabs.forEach((button,index)=>{button.addEventListener('click',()=>selectTab(button));button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next]);tabs[next].focus();}});});
});
document.querySelectorAll('.copy').forEach(button=>button.addEventListener('click',async()=>{const status=button.closest('.setup-box').querySelector('.copy-status');try{await navigator.clipboard.writeText(document.querySelector('#setup-code').textContent);button.textContent='Copied ✓';status.textContent='Setup commands copied';setTimeout(()=>button.textContent='Copy commands ↗',2500);}catch{status.textContent='Select the commands above to copy them';}}));

const tickerButton=document.querySelector('.ticker-pause');
if(tickerButton) tickerButton.addEventListener('click',()=>{
  const paused=tickerButton.getAttribute('aria-pressed')!=='true';
  tickerButton.setAttribute('aria-pressed',String(paused));
  tickerButton.setAttribute('aria-label',paused?'Resume ticker':'Pause ticker');
  tickerButton.textContent=paused?'▶':'Ⅱ';
  tickerButton.closest('.ticker').classList.toggle('is-paused',paused);
});
