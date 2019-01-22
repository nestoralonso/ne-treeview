workflow "New workflow" {
  on = "push"
  resolves = ["Action Test"]
}

action "npm install" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}

action "Action Test" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "test"
  needs = ["npm install"]
}
