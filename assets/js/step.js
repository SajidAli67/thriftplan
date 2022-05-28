

(function ( $ ) {
    $.fn.multiStepForm = function(args) {
        if(args === null || typeof args !== 'object' || $.isArray(args))
          throw  " : Called with Invalid argument";
        var form = this;
        var tabs = form.find('.tab');
        var steps = form.find('li');
        steps.each(function(i, e){
          $(e).on('click', function(ev){
          });
        });
        form.navigateTo = function (i) {/*index*/
          /*Mark the current section with the class 'current'*/
          tabs.removeClass('current').eq(i).addClass('current');
          // Show only the navigation buttons that make sense for the current section:
          
           form.find('.previous').toggle(i > 0);
           atTheEnd = i >= tabs.length - 1;
          form.find('.next').toggle(!atTheEnd);
          // console.log('atTheEnd='+atTheEnd);
          form.find('.submit').toggle(atTheEnd);
          fixStepIndicator(curIndex());
          return form;
        }
        function curIndex() {
          /*Return the current index by looking at which section has the class 'current'*/
          return tabs.index(tabs.filter('.current'));
        }
        function fixStepIndicator(n) {
          steps.each(function(i, e){
            i == n ? $(e).addClass('active-progress') : $(e).removeClass('');
          });
        }
        /* Previous button is easy, just go back */
        form.find('.previous').click(function() {
          form.navigateTo(curIndex() - 1);
        });
        // STep 2
      $('#step2').click(function(){
        if('validations' in args && typeof args.validations === 'object' && !$.isArray(args.validations)){
          if(!('noValidate' in args) || (typeof args.noValidate === 'boolean' && !args.noValidate)){
            form.validate(args.validations);
            if(form.valid() == true){
              $('#step2').addClass('active-progress')
               $('#tab1').removeClass('current')
               $('#tab2').addClass('current')
               $('#tab3').removeClass('current')
               $('#tab4').removeClass('current')
               $('#step3').removeClass('active-progress');
               $('#step4').removeClass('active-progress');
              return true;
              
            }
            return false;
          }
        }
      })
  
       // STep 3
       $('#step3').click(function(){
        if('validations' in args && typeof args.validations === 'object' && !$.isArray(args.validations)){
          if(!('noValidate' in args) || (typeof args.noValidate === 'boolean' && !args.noValidate)){
            form.validate(args.validations);
            if(form.valid() == true){
               $('#step3').addClass('active-progress')
               $('#tab3').addClass('current')
               $('#tab1').removeClass('current')
               $('#tab2').removeClass('current')
               $('#tab4').removeClass('current')
               $('#step4').removeClass('active-progress');
              return true;
              
            }
            return false;
          }
        }
      })
  
       // STep 4
       $('#step4').click(function(){
        if('validations' in args && typeof args.validations === 'object' && !$.isArray(args.validations)){
          if(!('noValidate' in args) || (typeof args.noValidate === 'boolean' && !args.noValidate)){
            form.validate(args.validations);
            if(form.valid() == true){
               $('#step4').addClass('active-progress')
               $('#tab4').addClass('current')
               $('#tab1').removeClass('current')
               $('#tab2').removeClass('current')
               $('#tab3').removeClass('current')
              return true;
              
            }
            return false;
          }
        }
      })
  
  
        /* Next button goes forward iff current block validates */
        form.find('.next').click(function() {
          if('validations' in args && typeof args.validations === 'object' && !$.isArray(args.validations)){
            if(!('noValidate' in args) || (typeof args.noValidate === 'boolean' && !args.noValidate)){
              form.validate(args.validations);
              if(form.valid() == true){
                form.navigateTo(curIndex() + 1);
                return true;
                
              }
              return false;
            }
          }
          form.navigateTo(curIndex() + 1);
        });
        form.find('.submit').on('click', function(e){
          if(typeof args.beforeSubmit !== 'undefined' && typeof args.beforeSubmit !== 'function')
            args.beforeSubmit(form, this);
          /*check if args.submit is set false if not then form.submit is not gonna run, if not set then will run by default*/        
          if(typeof args.submit === 'undefined' || (typeof args.submit === 'boolean' && args.submit)){
            form.submit();
          }
          return form;
        });
        /*By default navigate to the tab 0, if it is being set using defaultStep property*/
        typeof args.defaultStep === 'number' ? form.navigateTo(args.defaultStep) : null;
  
        form.noValidate = function() {
          
        }
        return form;
    };
  }( jQuery ));
  
  //preview img
      var loadFile = function(event) {
      var output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
      }
    };