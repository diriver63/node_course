function Emmitter(){
    this.event_s = {
        
    };
}

Emmitter.prototype.on = function(name_event, listener_func){
    this.event_s[name_event] = this.event_s[name_event] || [];
    this.event_s[name_event].push(listener_func);
}

Emmitter.prototype.emit = function(name_event){
    if (this.event_s[name_event]) {
        this.event_s[name_event].forEach(function(listener_func){
            listener_func();
        });
    }
}

module.exports = Emmitter;