"use strict";

var expect = require("chai").expect;
var titleize = require("../Login");

describe("Login", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(login("seth godin")).to.equal("Seth Godin");
  });

  it("to append period to leading titles", function() {
    expect(login("dr zhivago")).to.equal("Dr. Zhivago");
  });

  it("to not change properly cased strings", function() {
    expect(login("Mr. Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to add periods to properly capitalized titles", function() {
    expect(login("Mr Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to properly case mixed case strings", function() {
    expect(login("Mr AlEXANDER PushKIn")).to.equal("Mr. Alexander Pushkin");
  });
});
