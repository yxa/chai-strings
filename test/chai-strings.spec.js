describe('Chai String Assertions Plugin', function() {

  it('should check for uppercase correctly',function(done){
    expect('FOO').to.be.uppercase;
    expect('FOOo').to.be.not.uppercase;
    expect('foo').to.not.be.uppercase;
    done();
  });

  it('should check for lowercase correctly',function(done){
    expect('foo').to.be.lowercase;
    expect('fooO').to.be.not.lowercase;
    expect('FOO').to.be.not.lowercase;
    done();
  });

  it('should check for first character capitalized',function(done){
    expect('Foo').to.be.capitalized;
    expect('fooO').to.be.not.capitalized;
    done();
  });

  it('should verify that string ends with characters',function(done){
    expect('foobar').to.endWith('bar');
    expect('fooBar').to.endWith('Bar');
    expect('foobaaz').to.not.endWith('bar');
    done();
  });

  it('should verify that string starts with characters',function(done){
    expect('foobar').to.startWith('foobar');
    expect('foobar').to.startWith('foo');
    expect('fooBar').to.not.startWith('bar');
    done();
  });

})
