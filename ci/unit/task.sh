#!/usr/bin/env sh

set -e -u -x

cd behaveware

yarn

CI=true yarn test
