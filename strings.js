(function(plugin) {
  // NodeJS
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    module.exports = plugin;
  // AMD
  else if (typeof define === "function" && define.amd)
    define(function () { return plugin; });
  // Other
  else
    chai.use(plugin);
}(function(chai, utils) {
  var Assertion = chai.Assertion;

  Assertion.addProperty('uppercase', function() {
    var obj = this._obj;
    new Assertion(obj).to.be.a('string');
    this.assert(
      obj === obj.toUpperCase(),
      'expected #{this} to be all upercase',
      'expected #{this} to not be all uppercase'
    );
  });

   Assertion.addProperty('lowercase', function() {
    var obj = this._obj;
    new Assertion(obj).to.be.a('string');
    this.assert(
      obj === obj.toLowerCase(),
      'expected #{this} to be all lowercase',
      'expected #{this} to not be all lowecase'
    );
  });

   Assertion.addProperty('capitalized', function() {
    var obj = this._obj;

    var capitalized = function(target) {
      return (target[0] === target[0].toUpperCase());
    };

    new Assertion(obj).to.be.a('string');
    this.assert(
      capitalized(obj),
      'expected #{this} to be capitalized',
      'expected #{this} to not be capitalized'
    );
  });

   Assertion.addMethod('startWith', function(target) {
    var obj = this._obj;

    new Assertion(obj).to.be.a('string');
    new Assertion(target).to.be.a('string');

    var startsWith = function(target) {
      return (obj.slice(0, target.length) === target);
    };

    this.assert(
      startsWith(target),
      'expected ' + target + ' to be the starting characters',
      'expected ' + target + ' to not be the starting characters'
    );
  });

  Assertion.addMethod('endWith', function(target) {
    var obj = this._obj;

    new Assertion(obj).to.be.a('string');
    new Assertion(target).to.be.a('string');

    var endsWith = function(target) {
     return (obj.slice(-target.length) === target);
    };

    this.assert(
      endsWith(target),
      'expected ' + target + ' to be the ending characters',
      'expected ' + target + ' to not be the ending characters'
    );
  });

}));
