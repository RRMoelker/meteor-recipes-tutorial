# Recipe to store list Meteor intermediate example app

Variation of video series: https://youtu.be/BvkQNTIfbQk?list=PLLnpHn493BHFYZUSK62aVycgcAouqBt7V

# Run

`meteor run`

# Differences with tutorial
* using imports folder so no auto loading of JS, using ES2015 imports.
* Not using potentially insecure allow collection settings:
    * https://youtu.be/kCn_AnU91Dg?t=5m20s
    * this is why https://www.discovermeteor.com/blog/allow-deny-a-security-primer/